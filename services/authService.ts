import apiUrls from "@config/apiUrls";
import CoreUtils from "@utils/coreUtils";
import axios, { AxiosResponse } from "axios";

interface LoginResponse {
  code: number;
  data: {
    token: string;
  };
}
interface RegisterResponse {
  username: string;
  email: string;
  name: string;
  address: string;
  isTwoFAEnabled: boolean;
  contact: string;
  avatar: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

class AuthService {
  /**
   * Login
   * @param username
   * @param password
   * @param remember
   */
  async login(
    username: string,
    password: string,
    remember: boolean
  ): Promise<LoginResponse> {
    let url = apiUrls.USER_LOGIN;

    // if (process.env.NODE_ENV !== "production") {
    //   url += "?";
    //   for (let pair of formData.entries()) {
    //     url += `${pair[0]}=${pair[1]}&`;
    //   }

    //   url = url.replace(/^\&|\&$/, "");
    // }

    try {
      const response = await axios.post<LoginResponse>(url, {
        username,
        password,
        remember,
      });
      const jsonData = response.data;

      if (jsonData.code === 200) {
        localStorage.setItem(
          "SITE_DATA_AUTH",
          JSON.stringify({
            token: jsonData.data.token,
          })
        );

        if (remember) {
          CoreUtils.call(
            "setCookie",
            "SITE_DATA_LOGIN_COOKIE",
            jsonData.data.token,
            "/",
            14
          );
        } else {
          CoreUtils.call(
            "setCookie",
            "SITE_DATA_LOGIN_COOKIE",
            jsonData.data.token,
            "/",
            "Session"
          );
        }
        return jsonData;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("Login failed.");
  }
  /**
   *
   * @param username
   * @param email
   * @param password
   * @param name
   */

  async register(
    username: string,
    email: string,
    password: string,
    name: string
  ): Promise<RegisterResponse> {
    try {
      const response = await axios.post(apiUrls.USER_REGISTER, {
        username,
        email,
        password,
        name,
      });
      const { data } = response;
      if (data.code === 200) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("Registration failed.");
  }

  /**
   * logout function

   */
  async logout(): Promise<AxiosResponse | void> {
    try {
      const response = await axios.post(apiUrls.USER_LOGOUT);
      localStorage.removeItem("SITE_DATA_AUTH");
      CoreUtils.call("delCookie", "SITE_DATA_LOGIN_COOKIE", "/");
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
