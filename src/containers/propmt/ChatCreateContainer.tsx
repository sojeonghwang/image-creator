"use client";
import { useEffect } from "react";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";

function ChatListContainer() {
  const handleCreateImage = async () => {
    try {
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
          placeholder="명령어를 입력해주세요."
        ></textarea>
        <button onClick={handleCreateImage} className={styled.send_button}>
          <IoIosSend className={styled.send_icon} size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatListContainer;
