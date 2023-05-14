import axios, { AxiosResponse, AxiosError } from "axios";
import apiUrls from "@config/apiUrls";
import CoreUtils from "@utils/coreUtils";

interface LoginResponse {
  code: number;
  data: {
    token: string;
  };
}
interface LogOutResponse {
  success: string;
}

class AuthService {
  /**
   * Login
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
      }
      return jsonData;
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
      return { code: 500, data: { token: "" } };
    }
  }

  register(username: string, email: string, password: string, name: string) {
    return axios.post(apiUrls.USER_REGISTER, {
      username,
      email,
      password,
      name,
    });
  }

  /**
   * Remove user from local storage
   */
  //TODO: call logout API
  logout(): void {
    localStorage.removeItem("SITE_DATA_AUTH");
    CoreUtils.call("delCookie", "SITE_DATA_LOGIN_COOKIE", "/");
  }
}

export default new AuthService();
