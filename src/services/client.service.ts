import axios from 'axios';

export const get = async (url: string) => {
  const apiUrl = import.meta.env.VITE_SOME_KEY + url;
  const res = await axios.get(apiUrl);
  return res;
};

export const loginAPi = async (url: string, headers = {}) => {
  const apiUrl = import.meta.env.VITE_API_KEY + url;
  const res = await axios.get(apiUrl, {
    headers: {
      ...headers,
    },
  });
  return res;
};

export const moviesList = async (url: string, headers = {}) => {
  const apiUrl = import.meta.env.VITE_API_KEY + url;
  const res = await axios.get(apiUrl, {
    headers: {
      ...headers,
    },
  });
  return res;
};

export const configurations = async (url: string, headers = {}) => {
  const apiUrl = (import.meta.env.VITE_API_KEY + url);
  const res = await axios.get(apiUrl, {
    headers: {
      ...headers,
    },
  });

  return res;
};
