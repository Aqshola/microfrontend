import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string;
  setToken: () => any;
}
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: "",
      setToken: () => set({ token: "login" }),
    }),
    { name: "auth-store" }
  )
);

export default useAuthStore;
