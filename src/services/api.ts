import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sds5-heitor.herokuapp.com',
})

export default api;