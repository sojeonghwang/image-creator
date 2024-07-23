import { create } from "zustand";

interface CreatedImageInterface {
  id: string;
  image?: string;
  text?: string;
}

interface ChatState {
  message: CreatedImageInterface[];
  selectedMessage: CreatedImageInterface | null;
}

interface ChatAction {
  addChat: (message: CreatedImageInterface) => void;
  setSelectedImage: (message: CreatedImageInterface) => void;
}

const chatStroe = create<ChatState & ChatAction>((set) => ({
  message: [],
  selectedMessage: null,
  addChat: (message: CreatedImageInterface) => {
    set((state) => {
      const newMessage = state.message?.concat(message);
      if (!state.selectedMessage && !!message?.image) {
        //@description 선택된 이미지 초기화
        state.setSelectedImage(message);
      }
      return {
        message: newMessage,
      };
    });
  },
  setSelectedImage: (selectedImage: CreatedImageInterface) => {
    set(() => {
      return {
        selectedMessage: selectedImage,
      };
    });
  },
}));

export default chatStroe;
