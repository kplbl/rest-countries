import create from "zustand";

const useStore = create((set) => ({
  dark: false,
  toggle: () => set((state) => ({ dark: !state.dark })),
}));

export default useStore;
