import axios from 'axios';

const api = axios.create({
    baseURL: "https://nodeteste.protestodireto.com.br/"
});

export default api;