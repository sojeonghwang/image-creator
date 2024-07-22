"use client";
import RoundBox from "@/components/box/RoundBox";
import styled from "./chatList.module.css";
import chatStroe from "@/hooks/store/chat";
import { useEffect, useMemo, useRef } from "react";

function ChatListContainer() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { message } = chatStroe();

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
            marign="0 0 10px 0"
            key={`message_${messageItem.id}`}
          >
            <img className={styled.image_wrap} src={messageItem.image} />
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

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={styled.wrap}>
      <div className={styled.inner}>{ChatList}</div>
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default ChatListContainer;
