import UserService from "./UserService";
import { defaultAxiosInstance as api, defaultAxiosInstance } from "./Api";
import { AxiosInstance } from "axios";

const AuthorService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllAuthors: async () => {
    try {
      await UserService().logIn("leonaistrefi@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.get(`/author`, config); 
      const author = response.data.slice(-20)
      return author;
    } catch (error) {
      throw error;
    }
  },

  getAuthorById: async (authorId) => {
    try {
      await UserService().logIn("leonaistrefi@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.get(`author/${authorId}`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postAuthor: async (data) => {
    try {
      await UserService().logIn("leonaistrefi@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.post("author", data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteAuthor: async (authorId) => {
    try {
      await UserService().logIn("leonaistrefi@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await api.delete(`author/${authorId}`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  putAuthor: async (authorId, Name, Birthday) => {
    try {
      await UserService().logIn("leonaistrefi@mail.com", "1234");
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No Access token in local storage available");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const data = { author_name:Name, birth_date:Birthday };

      const response = await api.put(`author/${authorId}`, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export default AuthorService;