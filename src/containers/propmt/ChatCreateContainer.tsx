"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiStopCircleFill } from "react-icons/ri";
import chatStore from "@/hooks/store/chat";
import alertStore from "@/hooks/store/alert";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/common/Loading";
import useApiRequest from "@/hooks/useApiRequest";
import InitButton from "@/components/common/InitButton";

const requestDefaultOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function ChatListContainer() {
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const { sendRequest: translatorSendRequest, loading: translatorLoading } =
    useApiRequest<{
      message: { result: { translatedText: string } };
    }>();

  const { sendRequest: imageCreatorSendRequest, loading: imageCreatorLoading } =
    useApiRequest<{
      id: string;
      images: {
        id: string;
        image: string;
      }[];
    }>();

  const { addChat } = chatStore();
  const { setToastMessage } = alertStore();

  const handleUpdateInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (event.target as HTMLTextAreaElement).value;
    setEnteredPrompt(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return;
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleTranslate();
      event.preventDefault();
      return;
    }
  };

  const handleTranslate = async () => {
    try {
      if (!enteredPrompt.length) {
        return;
      }

      const res = await translatorSendRequest(
        "/api/translator",
        requestDefaultOption,
        {
          prompt: enteredPrompt,
        }
      );

      if (res.isSuccess) {
        const { translatedText = undefined } = res.data?.message.result ?? {};
        if (!translatedText) {
          setToastMessage("번역에 실패했습니다.");
          return;
        }

        handleCreateImage(translatedText);
      } else {
        setToastMessage(res.errorMessage ?? "에러가 발생했습니다.");
      }
    } catch (exception) {
      setToastMessage("에러가 발생했습니다.");
      console.error(`[handleTranslate] - ${exception}`);
    }
  };

  const handleCreateImage = async (translatedText: string) => {
    try {
      if (!enteredPrompt.length) {
        return;
      }
      addChat({
        text: enteredPrompt,
        id: enteredPrompt,
      });
      setEnteredPrompt("");

      const res = await imageCreatorSendRequest(
        "/api/image-creator",
        requestDefaultOption,
        {
          prompt: translatedText,
        }
      );

      if (res.isSuccess) {
        if (!!res.data?.id) {
          addChat({
            image: res.data.images[0].image ?? "",
            id: res.data.id,
          });
        } else {
          setToastMessage("이미지 생성에 실패했습니다.");
        }
      } else {
        setToastMessage(res.errorMessage ?? "에러가 발생했습니다.");
      }
    } catch (exception) {
      setToastMessage("에러가 발생했습니다.");
      console.error(`[handleCreateImage] - ${exception}`);
    }
  };

  const handleRecordUserMic = async () => {
    try {
      if (!isRecording) {
        stream.current = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });

        recorder.current = new MediaRecorder(stream.current, {
          mimeType: "audio/webm",
        });
        recorder.current.start();
        setIsRecording(true);
      } else {
        //type 가드
        if (!recorder.current) {
          return;
        }
        //녹음 중단
        recorder.current.stop();
        setIsRecording(false);
        recorder.current = null;
      }
    } catch (exception) {
      setToastMessage("마이크 권한을 허용해주셔야 합니다.");
      console.log(`[handleRecordUserMic] - ${exception}`);
    }
  };

  const handleRecordedAudioStream = (event: BlobEvent) => {
    if (!!stream?.current) {
      //type 방어
      stream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }

    if (!event.data) {
      setToastMessage("오디오 녹음 정보를 받아 오지 못했습니다.");
      return;
    }
    // 확인용 -> 여기서 video  player 에서 처리 한거 여기 따 붙이기
    const audioFile = URL.createObjectURL(event.data);
    const temp2 = new Audio(audioFile);

    // public blobToFile = (theBlob: Blob, fileName:string): File => {

    // const toFile = new File(
    //   [event.data as any], // cast as any
    //   "test.mp3",
    //   {
    //     lastModified: new Date().getTime(),
    //     type: event.data.type,
    //   }
    // );
    //Cast to a File() type
    // }

    temp2.play();
  };

  useEffect(
    function () {
      if (!recorder.current) {
        return;
      }

      recorder.current.ondataavailable = handleRecordedAudioStream;
    },
    [recorder.current]
  );

  return (
    <div className={styled.wrap}>
      {translatorLoading || imageCreatorLoading ? (
        <Loading />
      ) : (
        <div className={styled.input_wrap}>
          <textarea
            className={styled.textarea}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={handleUpdateInput}
            placeholder="명령어를 입력해주세요."
            value={enteredPrompt}
          ></textarea>
          <InitButton onClick={handleRecordUserMic}>
            {isRecording ? (
              <RiStopCircleFill size={20} />
            ) : (
              <FaMicrophoneAlt size={20} />
            )}
          </InitButton>
          <InitButton onClick={handleTranslate} className={styled.send_button}>
            <IoIosSend className={styled.send_icon} size={20} />
          </InitButton>
        </div>
      )}
    </div>
  );
}

export default ChatListContainer;
