import { API_URL } from "./api";

export const getPayments = async () => {
  return fetch(`${API_URL}/payments`);
};