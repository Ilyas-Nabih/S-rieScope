import instance from "./api.js";

export async function getAll() {
    const response = await instance.get('/series')
    return response.data
}

export async function create(movies) {
    const response = await instance.post('/series', movies)
    return response.data;
}



