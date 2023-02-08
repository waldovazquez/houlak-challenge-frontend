import axios from "axios";

import api from "./api";

export async function getAlbums(artist: string, token: string) {
  try {
    const response = await api.get('/api/albums', {
      params: {
        artist,
      },
      headers: {
        'x-access-token': token
      }
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