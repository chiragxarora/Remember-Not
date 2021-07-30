import axios from 'axios';

export const Root = axios.create({
    baseURL: 'http://localhost:3001'
});