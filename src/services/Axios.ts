import axios from 'axios';

const API_BASE_URL = 'https://api.rawg.io/api';
const API_KEY = '332621ef23d64038ab3fa3574ab044aa';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: API_KEY,
  },
});

export const fetchWithAxios = async (endpoint: string, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error en fetchWithAxios:', error);
    throw error;
  }
};
