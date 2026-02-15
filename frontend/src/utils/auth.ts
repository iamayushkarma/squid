import type { User } from "@/types/user.ts";

const setUser = (user: User) =>
  localStorage.setItem("user", JSON.stringify(user));

const getUser = (): User | null =>
  JSON.parse(localStorage.getItem("user") || "null");

const setToken = () => localStorage.setItem("auth_token", "demo-token");

const getToken = () => localStorage.getItem("auth_token");

const logoutUser = () => {
  localStorage.removeItem("auth_token");
};

export { setUser, getUser, setToken, getToken, logoutUser };
