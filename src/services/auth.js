import API from './api'

export const LOGIN = async () => {
    const { data } = await API.post('/auth/login');

    return data;
}

export const LOGOUT = async () => {
    const { data } = await API.post('/auth/logout');

    return data;
}

export const ME = async () => {
    const { data } = await API.get('/auth/me');

    return data;
}