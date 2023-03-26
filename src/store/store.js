import { create } from "zustand";

export const useLoggedInStore = create((set) => ({
    isLoggedIn: false,
    isAdmin: false,
    setLoginStatus: (login) => set(() => ({isLoggedIn: login})),
    setAdminStatus: (admin) => set(() => ({isAdmin: admin})) 
}));
