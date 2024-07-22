import { create } from "zustand";

interface CreatedImageInterface {
  id: string;
  image?: string;
  text?: string;
}

interface ChatState {
  message: CreatedImageInterface[];
}

interface ChatAction {
  addChat: (message: CreatedImageInterface) => void;
}

const chatStroe = create<ChatState & ChatAction>((set) => ({
  message: [],
  addChat: (message: CreatedImageInterface) => {
    // @todo any 고치기
    set((state: ChatState) => {
      const newMessage = state.message?.concat(message);
      return {
        message: newMessage,
      };
    });
  },
}));

export default chatStroe;
