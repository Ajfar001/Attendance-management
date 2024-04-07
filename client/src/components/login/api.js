import axios from "axios";
import { API_URL } from "../../../config";
export const getToken = async (username, password) => {
  try {

    // console.log("API_URL", API_URL);
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    const data = response.data;
    const token = data.token;

    sessionStorage.setItem("token", token);
    return { token: token };
  } catch (error) {
    return { invalid: "Invalid username or password. Please try again. " };
  }
};
