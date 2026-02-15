import type { User } from "@/types/user.ts";
import { nanoid } from "nanoid";

const setUser = (user: User) =>
  localStorage.setItem("user", JSON.stringify(user));

const getUser = (): User | null =>
  JSON.parse(localStorage.getItem("user") || "null");

const setToken = () => {
  const token = nanoid();
  localStorage.setItem("auth_token", token);
};

const getToken = () => localStorage.getItem("auth_token");

const logoutUser = () => {
  localStorage.removeItem("auth_token");
};

export { setUser, getUser, setToken, getToken, logoutUser };
