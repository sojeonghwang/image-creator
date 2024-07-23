import { create } from "zustand";

interface AlertState {
  toastMessage: string | null;
}

interface AlertAction {
  setToastMessage: (message: string | null) => void;
}

const alertStroe = create<AlertState & AlertAction>((set) => ({
  toastMessage: null,
  setToastMessage: (toastMessage: string | null) => {
    set(() => {
      return {
        toastMessage,
      };
    });
  },
}));

export default alertStroe;
