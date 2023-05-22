interface Config {
  // authentication and user routes
  USER_LOGIN: string;
  USER_REGISTER: string;
  USER_ACTIVATE: string;
  USER_PROFILE: string;
  USER_CHANGE_PASSWORD: string;
  USER_RESET_PASSWORD: string;
  USER_FORGOT_PASSWORD: string;
  REFRESH_TOKEN: string;
  USER_LOGOUT: string;
  USER_AUTHENTICATE: string;
  USER_TOGGLE_2FA: string;

  // Entity routes
  ENTITY: string;
}

const config: Config = {
  USER_LOGIN: `${process.env.BASE_URL}/auth/login`,
  USER_REGISTER: `${process.env.BASE_URL}/auth/register`,
  USER_ACTIVATE: `${process.env.BASE_URL}/auth/activate-account`,
  USER_PROFILE: `${process.env.BASE_URL}/auth/profile`,
  USER_CHANGE_PASSWORD: `${process.env.BASE_URL}/auth/change-password`,
  USER_RESET_PASSWORD: `${process.env.BASE_URL}/auth/reset-password`,
  USER_FORGOT_PASSWORD: `${process.env.BASE_URL}/auth/forgot-password`,
  REFRESH_TOKEN: `${process.env.BASE_URL}/auth/refresh`,
  USER_LOGOUT: `${process.env.BASE_URL}/auth/logout`,
  USER_AUTHENTICATE: `${process.env.BASE_URL}/twofa/authenticate`,
  USER_TOGGLE_2FA: `${process.env.BASE_URL}/twofa`,
  ENTITY: `${process.env.BASE_URL}/v1/entities`,
};

const localConfig: Config = {
  USER_LOGIN: `${process.env.BASE_URL}/auth/login`,
  USER_REGISTER: `${process.env.BASE_URL}/auth/register`,
  USER_ACTIVATE: `${process.env.BASE_URL}/auth/activate-account`,
  USER_PROFILE: `${process.env.BASE_URL}/auth/profile`,
  USER_CHANGE_PASSWORD: `${process.env.BASE_URL}/auth/change-password`,
  USER_RESET_PASSWORD: `${process.env.BASE_URL}/auth/reset-password`,
  USER_FORGOT_PASSWORD: `${process.env.BASE_URL}/auth/forgot-password`,
  REFRESH_TOKEN: `${process.env.BASE_URL}/auth/refresh`,
  USER_LOGOUT: `${process.env.BASE_URL}/auth/logout`,
  USER_AUTHENTICATE: `${process.env.BASE_URL}/twofa/authenticate`,
  USER_TOGGLE_2FA: `${process.env.BASE_URL}/twofa`,
  ENTITY: `${process.env.BASE_URL}/v1/entities`,
};

const urls = process.env.NODE_ENV === "production" ? config : localConfig;

export default urls;
