import axios from 'axios';

export const get = async(url: string) => {
  const apiUrl = import.meta.env.VITE_SOME_KEY + url;
  const res = await axios.get(apiUrl);
  return res;
}
