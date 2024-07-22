"use client";
import RoundBox from "@/components/box/RoundBox";
import styled from "./chatList.module.css";
import chatStroe from "@/hooks/store/chat";
import { useMemo } from "react";

function ChatListContainer() {
  const { message } = chatStroe();
  console.log("?message", message);

  const ChatList = useMemo(() => {
    if (message?.length === 0) {
      return <>이미지를 생성해보세요.</>;
    }

    return message?.map((messageItem) => {
      // image
      if (!!messageItem?.image) {
        return (
          <RoundBox
            bgColor="rgb(187 205 227)"
            key={`message_${messageItem.id}`}
          >
            <img src="https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg" />
          </RoundBox>
        );
      }

      return (
        <RoundBox
          key={`message_${messageItem.id}`}
          bgColor="#f0f4f9"
          marign="0 0 10px 0"
        >
          {messageItem.text}
        </RoundBox>
      );
    });
  }, [message]);

  return (
    <div className={styled.wrap}>
      <div className={styled.inner}>{ChatList}</div>
    </div>
  );
}

export default ChatListContainer;
