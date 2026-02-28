import { API_URL } from "./api";

export const loginAdmin = async (data: any) => {
  return fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};