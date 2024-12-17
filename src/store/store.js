import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist((set) => ({
    users: [],
    addUser: (newUser) =>
      set((state) => ({
        users: [...state.users, newUser],
      })),
    removeUser: (name) =>
      set((state) => ({
        users: state.users.filter((user) => user.name !== name),
      })),
  })),
  { name: "users" }
);
