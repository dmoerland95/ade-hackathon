import axios from "axios";

const API_URL = "http://ws.audioscrobbler.com/2.0/";

const api = axios.create({
  baseURL: `${API_URL}`
});

export const get = (path) => {
  return api.get(path);
};

export const post = (path, data) => {
  return api.post(path, data);
};
