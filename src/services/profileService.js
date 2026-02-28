import { API_URL } from "./api";

export const getProfiles = async (status) => {
  return fetch(`${API_URL}/profiles?status=${status}`);
};