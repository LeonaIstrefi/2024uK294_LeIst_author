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

      const response = await api.get("authors", config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postAuthor: async (Name, Birthday) => {
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

      const data = { Name, Birthday };

      const response = await api.post("authors", data, config);
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

      const response = await api.delete(`authors/${authorId}`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export default AuthorService;