import axios from "axios";

// eslint-disable-next-line no-undef
const API_BASE = process.env.REACT_APP_API_ENDPOINT || "";

export const getClientList = async (query) => {
  return axios.get(`${API_BASE}/client`, {
    params: query,
  });
};

export const createClient = async (productData) => {
  return axios.post(`${API_BASE}/client`, productData);
};
