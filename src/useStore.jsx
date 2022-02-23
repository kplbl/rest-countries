import create from "zustand";

const useStore = create((set) => ({
  dark: false,
  countries: [],
  search: "",
  filter: "",
  setCountries: (countries) => {
    set({ countries });
  },
  setSearch: (value) => set({ search: value }),
  setFilter: (value) => set({ filter: value }),
  toggle: () => set((state) => ({ dark: !state.dark })),
}));

export default useStore;
