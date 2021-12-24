import API from './api'

export const LIST_USERS = async () => {
    const { data } = await API.get(`/users`);

    return data;
}

export const GET_USER = async (id) => {
    const { data } = await API.get(`/users/${id}`);

    return data;
}

export const POST_USER = async (payload) => {
    const { data } = await API.post(`/users`, payload);

    return data;
}

export const UPDATE_USER = async (id, payload) => {
    const { data } = await API.put(`/users/${id}`, payload);

    return data;
}

export const DELETE_USER = async (id) => {
    const { data } = await API.delete(`/users/${id}`);

    return data;
}