import api from "@/services/api";
import type { ApiUser } from "@/types/user";

export const fetchUsers = async (): Promise<ApiUser[]> => {
  const response = await api.get<ApiUser[]>("/users");
  return response.data;
};
