import instance from './instance';

export const getAll = () => {
    const url = "/orders";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/orders`;
    return instance.post(url, post);
}
export const put = (id, post) => {
    const url = `/orders/${id}`;
    return instance.put(url, post);
}
export const remove = (id) => {
    const url = `/orders/${id}`;
    return instance.delete(url);
}