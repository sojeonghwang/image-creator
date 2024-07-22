"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";
import chatStroe from "@/hooks/store/chat";
import { useState } from "react";

// @todo swr 연동: https://velog.io/@sinclairr/next-swr-1
function ChatListContainer() {
  const [enteredPrompt, setEnteredPrompt] = useState("");
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
      handleCreateImage();
      event.preventDefault();
      return;
    }
  };

  const handleCreateImage = async () => {
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
          prompt: "A photo of a cute tiny monster on the beach, daylight.",
        }),
      });

      const data = await res.json();
      console.log("??res", data);
    } catch (exception) {
      // @todo 에러 처리
      console.log("?exception", exception);
    }
  };

  return (
    <div className={styled.wrap}>
      <div className={styled.input_wrap}>
        <textarea
          className={styled.textarea}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleUpdateInput}
          placeholder="명령어를 입력해주세요."
          value={enteredPrompt}
        ></textarea>
        <button onClick={handleCreateImage} className={styled.send_button}>
          <IoIosSend className={styled.send_icon} size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatListContainer;
