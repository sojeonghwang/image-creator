"use client";
import RoundBox from "@/components/box/RoundBox";
import styled from "./chatList.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import chatStroe from "@/hooks/store/chat";
import alertStore from "@/hooks/store/alert";
import { useEffect, useMemo, useRef } from "react";
import useApiRequest from "@/hooks/useApiRequest";

function ChatListContainer() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { message } = chatStroe();
  const { setToastMessage } = alertStore();
  const { sendRequest, loading } = useApiRequest<string>();

  const handleScrollDown = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadImage = (data: string) => {
    const link = document.createElement("a");
    link.download = "download.webp";
    link.href = `data:image/png;base64,${data}`;
    link.click();
  };

  const handleChangeImageToBase64 = async (imageSrc: string) => {
    if (!imageSrc) {
      return;
    }

    try {
      const res = await sendRequest(
        "/api/image-changer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
        { imageSrc }
      );

      if (res.isSuccess && res.data) {
        handleDownloadImage(res.data);
      } else {
        setToastMessage(res.errorMessage ?? "에러가 발생했습니다.");
      }
    } catch (exception) {
      setToastMessage("에러가 발생했습니다.");
      console.error(`[handleChangeImageToBase64] - ${exception}`);
    }
  };

  const ChatList = useMemo(() => {
    if (message?.length === 0) {
      return <>이미지를 생성해보세요.</>;
    }

    return message?.map((messageItem, index) => {
      if (!!messageItem?.image) {
        const isLastImage = message.length - 1 === index;

        return (
          <RoundBox
            bgColor="rgb(187 205 227)"
            marign="0 0 10px 0"
            key={`message_${messageItem.id}`}
          >
            <img
              id={`image_${messageItem.id}`}
              onLoad={isLastImage ? handleScrollDown : () => {}}
              className={styled.image_wrap}
              src={messageItem.image}
            />
            <button
              className={styled.download_button}
              onClick={() =>
                handleChangeImageToBase64(messageItem?.image ?? "")
              }
            >
              <IoCloudDownloadOutline stroke="#fff" size={25} />
            </button>
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
    if (!message?.[message?.length - 1]?.image) {
      handleScrollDown();
    }
  }, [message]);

  return (
    <div className={styled.wrap}>
      <div className={styled.inner}>{ChatList}</div>
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default ChatListContainer;
