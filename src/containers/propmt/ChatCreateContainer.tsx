"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";
import chatStore from "@/hooks/store/chat";
import alertStore from "@/hooks/store/alert";
import { useState } from "react";
import Loading from "@/components/common/Loading";
import useApiRequest from "@/hooks/useApiRequest";

const requestDefaultOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function ChatListContainer() {
  const [enteredPrompt, setEnteredPrompt] = useState("");
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

  const { addChat, selectedMessage } = chatStore();
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
          <button onClick={handleTranslate} className={styled.send_button}>
            <IoIosSend className={styled.send_icon} size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatListContainer;
