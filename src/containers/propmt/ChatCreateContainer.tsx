"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";
import chatStroe from "@/hooks/store/chat";
import { useState } from "react";
import Loading from "@/components/common/Loading";

// @todo swr 연동: https://velog.io/@sinclairr/next-swr-1
function ChatListContainer() {
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addChat, selectedMessage } = chatStroe();

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

  // @description 이미지 수정이 잘 안되어서 사용 안함
  const handleUpdateImage = async (translatedText: string) => {
    try {
      if (!enteredPrompt.length) {
        return;
      }

      const imageBase64Src = getBase64ImageStr(`image_${selectedMessage?.id}`);
      addChat({
        text: enteredPrompt,
        id: enteredPrompt,
      });
      setEnteredPrompt("");
      const res = await fetch("/api/image-editor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: translatedText,
          image: imageBase64Src,
        }),
      });

      const { data } = await res.json();

      if (!!data?.id) {
        addChat({
          image: data?.images?.[0]?.image ?? "",
          id: data.id,
        });
      }
    } catch (exception) {
      // @todo 에러 처리
      console.log("?exception", exception);
    } finally {
      setIsLoading(false);
    }
  };

  const getBase64ImageStr = (imageId: string) => {
    const imageElement = document.getElementById(imageId) as HTMLImageElement;
    //type 방어
    if (!imageElement) {
      return;
    }

    return imageElement.src.replace("data:image/jpeg;base64,", "");
  };

  const handleTranslate = async () => {
    try {
      if (!enteredPrompt.length) {
        return;
      }

      setIsLoading(true);
      const res = await fetch("/api/translator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: enteredPrompt,
        }),
      });

      const { data } = await res.json();

      if (!!data?.message?.result?.translatedText) {
        const { translatedText = undefined } = data?.message?.result;
        if (!translatedText) {
          console.error("번역에 실패했습니다.");
          return;
        }

        handleCreateImage(translatedText);
      }
    } catch (exception) {
      // @todo 에러 처리
      setIsLoading(false);
      // console.log("?exception", exception);
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
      const res = await fetch("/api/image-creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: translatedText,
        }),
      });

      const { data } = await res.json();

      if (!!data?.id) {
        addChat({
          image: data?.images?.[0]?.image ?? "",
          id: data.id,
        });
      }
    } catch (exception) {
      // @todo 에러 처리
      // console.log("?exception", exception);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styled.wrap}>
      {isLoading ? (
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
