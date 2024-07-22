"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";
import chatStroe from "@/hooks/store/chat";
import { useState } from "react";
import Loading from "@/components/common/Loading";
import useSWRMutation from "swr/mutation";

// @todo swr 연동: https://velog.io/@sinclairr/next-swr-1
function ChatListContainer() {
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addChat } = chatStroe();

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
      // A photo of a cute tiny monster on the beach, daylight.

      const { data } = await res.json();
      if (!!data?.message?.result?.translatedText) {
        handleCreateImage(data?.message?.result?.translatedText);
        return;
      }

      // handleCreateImage();
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
      // A photo of a cute tiny monster on the beach, daylight.

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
