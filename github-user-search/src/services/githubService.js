import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
