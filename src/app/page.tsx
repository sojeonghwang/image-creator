import styled from "./page.module.css";
import Spacer from "@/components/common/Spacer";
import ChatListContainer from "@/containers/chatList/ChatListContainer";
import ChatCreateContainer from "@/containers/propmt/ChatCreateContainer";

export default function Home() {
  return (
    <div className={styled.wrap}>
      <Spacer height={10} />
      <ChatListContainer />
      <ChatCreateContainer />
    </div>
  );
}

// 젠버디 들어오셔요 종순아 문을 열어듀렴 아바디 들어오셔요~
