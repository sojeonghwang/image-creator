"use client";
import styled from "./chatCreate.module.css";
import { IoIosSend } from "react-icons/io";

function ChatListContainer() {
  return (
    <div className={styled.wrap}>
      <div className={styled.input_wrap}>
        <textarea
          className={styled.textarea}
          placeholder="명령어를 입력해주세요."
        ></textarea>
        <button className={styled.send_button}>
          <IoIosSend className={styled.send_icon} size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatListContainer;
