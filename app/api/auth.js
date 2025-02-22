import api from "./apiConfig";

export const login = async (username, password) => {
  const response = await api.post("/login", { username, password });
  return response;
};

export const register = async (username, password) => {
  const response = await api.post("/register", { username, password });
  return response;
};
