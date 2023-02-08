import axios from "axios";

import api from "./api";

export async function getUserDataByToken(token: string) {
  try {
    const response = await api.get('/api/getuser', {
      params: {
        token: token,
      },
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
  }
  return null;
}