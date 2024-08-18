// import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { useZustand } from "use-zustand";
import { createStore } from "zustand/vanilla";

interface AuthState {
  token: string;
  setToken: () => any;
  setCustomToken: (custom: string) => any;
}

const useAuthStore = createStore<AuthState>()(
  persist(
    (set: any) => ({
      token: "",
      setToken: () => set({ token: "login" }),
      setCustomToken: (val: string) => set({ token: val }),
    }),
    { name: "auth-store" }
  )
);

export default useAuthStore;
