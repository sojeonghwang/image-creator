import RoundBox from "@/components/box/RoundBox";
import styled from "./chatList.module.css";

function ChatListContainer() {
  return (
    <div className={styled.wrap}>
      <div className={styled.inner}>
        <RoundBox bgColor="#f0f4f9" marign="0 0 10px 0">
          여기에 명령어 나올거에요
        </RoundBox>
        <RoundBox bgColor="rgb(187 205 227)">
          <img src="https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg" />
        </RoundBox>
      </div>
    </div>
  );
}

export default ChatListContainer;
