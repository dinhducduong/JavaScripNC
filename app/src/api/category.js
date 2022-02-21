import instance from './instance';

export const getAll = () => {
    const url = "/category";
    return instance.get(url);
}
export const getAllCate = () => {
    const url = "/category";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
}
export const gets = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/category`;
    return instance.post(url, post);
}
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const put = (id, post) => {
    const url = `/category/${id}`;
    return instance.put(url, post);
}