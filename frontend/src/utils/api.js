import axios from 'axios';

const api = axios.create({
  baseURL: 'https://memematebackend.onrender.com/api',
  withCredentials: true,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export default api;