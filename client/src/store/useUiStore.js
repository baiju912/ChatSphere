import { create } from "zustand";
import api from "../config/api";
import { toast } from "react-hot-toast";
const useUiStore = create((set, get) => ({
  menuOpen: false,

  setMenuOpen: (val) => {
    set({ menuOpen: val });
  },
}));

export default useUiStore;
