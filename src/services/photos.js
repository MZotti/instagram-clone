import API from './api'

export const LIST_PHOTOS = async () => {
    const { data } = await API.get(`/photos`);

    return data;
}

export const GET_PHOTO = async (id) => {
    const { data } = await API.get(`/photos/${id}`);

    return data;
}

export const POST_PHOTO = async (payload) => {
    const { data } = await API.post(`/photos`, payload);

    return data;
}

export const UPDATE_PHOTO = async (id, payload) => {
    const { data } = await API.put(`/photos/${id}`, payload);

    return data;
}

export const DELETE_PHOTO = async (id) => {
    const { data } = await API.delete(`/photos/${id}`);

    return data;
}