import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

export default api;
