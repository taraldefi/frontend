import axios from "axios";
import authService from "../services/authService";
import CoreUtils from "@utils/coreUtils";
import apiUrls from "@config/apiUrls";

// Use Jest to mock axios and CoreUtils modules
jest.mock("axios");
jest.mock("@utils/coreUtils", () => ({
  call: jest.fn(),
}));

describe("AuthService", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (axios.post as jest.Mock).mockClear();
    (CoreUtils.call as jest.Mock).mockClear();
  });

  describe("login", () => {
    it("should make a POST request to the login API", async () => {
      const mockResponse = {
        code: 200,
        data: {
          token: "testToken",
        },
      };

      (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockResponse });

      const loginResponse = await authService.login(
        "username",
        "password",
        true
      );

      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_LOGIN, {
        username: "username",
        password: "password",
        remember: true,
      });

      expect(loginResponse).toEqual(mockResponse);
    });
  });

  describe("register", () => {
    it("should make a POST request to the register API", async () => {
      const mockResponse = {
        success: true,
      };

      (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockResponse });

      const registerResponse = await authService.register(
        "username",
        "test@123.com",
        "password",
        "testname"
      );

      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_REGISTER, {
        username: "username",
        email: "test@123.com",
        password: "password",
        name: "testname",
      });
      expect(registerResponse).toEqual(mockResponse);
    });
  });
});
