import apiUrls from "@config/apiUrls";
import CoreUtils from "@utils/coreUtils";
import axios, { AxiosResponse } from "axios";
import { LoginResponse, RegisterResponse, TwoFAResponse } from "types";

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
        username: username,
        password: password,
        remember: remember,
      });
      const { data } = response;

      if (response.status === 201) {
        localStorage.setItem(
          "SITE_DATA_AUTH",
          JSON.stringify({
            token: data.token,
          })
        );

        if (remember) {
          CoreUtils.call(
            "setCookie",
            "SITE_DATA_LOGIN_COOKIE",
            data.token,
            "/",
            14
          );
        } else {
          CoreUtils.call(
            "setCookie",
            "SITE_DATA_LOGIN_COOKIE",
            data.token,
            "/",
            "Session"
          );
        }
        return data;
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
        username: username,
        email: email,
        password: password,
        name: name,
      });
      const { data } = response;
      if (response.status === 201) {
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
   * Toggle 2FA function
   * @param isTwoFAEnabled
   */
  async toggle2FA(isTwoFAEnabled: boolean): Promise<TwoFAResponse> {
    try {
      const response = await axios.put(apiUrls.USER_TOGGLE_2FA, {
        isTwoFAEnabled: isTwoFAEnabled,
      });
      const { data } = response;
      if (response.status === 204) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("2FA toggle failed.");
  }

  /**
   * TwoFA authenticate functions
   * @param code
   */
  async authenticateTwoFA(code: string): Promise<AxiosResponse> {
    try {
      const response = await axios.post(apiUrls.USER_AUTHENTICATE, {
        code: code,
      });
      const { data } = response;
      if (response.status === 200) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("2FA authentication failed.");
  }

  /**
   * logout function

   */
  async logout(): Promise<AxiosResponse> {
    try {
      const response = await axios.post(apiUrls.USER_LOGOUT);
      localStorage.removeItem("SITE_DATA_AUTH");
      CoreUtils.call("delCookie", "SITE_DATA_LOGIN_COOKIE", "/");
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("logout failed.");
  }
}

const authService = new AuthService();

export default authService;
