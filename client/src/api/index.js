import axios from 'axios';

export const Root = axios.create({
    baseURL: 'http://localhost:3001'
});

export const User = axios.create({
    baseURL: 'http://localhost:3001/api/v1/users'
});

export const Credential = axios.create({
    baseURL: 'http://localhost:3001/api/v1/credentials'
});