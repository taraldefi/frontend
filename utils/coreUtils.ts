import Hooks from "./utilsHooks";
import cookieService from "./lib/cookieUtils";
import authHeader from "./lib/authHeader";

const CoreUtils = new Hooks();

CoreUtils.add("getCookie", (...attrs: [string]) =>
  cookieService.getCookie(...attrs)
);
CoreUtils.add("setCookie", (...attrs: [string, string, string, number]) =>
  cookieService.setCookie(...attrs)
);
CoreUtils.add("delCookie", (...attrs: [string, string]) =>
  cookieService.delCookie(...attrs)
);
CoreUtils.add("authHeader", (...attrs: []) => authHeader(...attrs));

export default CoreUtils;
