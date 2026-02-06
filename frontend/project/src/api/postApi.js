import api from "./axios";

export const fetchPosts = () => api.get("/posts");
export const createPost = (data) => api.post("/posts", data);
export const likePost = (id) => api.post(`/posts/like/${id}`);
export const commentPost = (id, text) =>
  api.post(`/posts/comment/${id}`, { text });
