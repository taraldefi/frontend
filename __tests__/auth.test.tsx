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
    (axios.put as jest.Mock).mockClear();
    (CoreUtils.call as jest.Mock).mockClear();
  });

  describe("login", () => {
    it("should be able to login a user", async () => {
      const mockResponse = {
        status: 201,
        data: {
          token: "testToken",
        },
      };

      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await authService.login("username", "password", true);

      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_LOGIN, {
        username: "username",
        password: "password",
        remember: true,
      });

      expect(result).toEqual(mockResponse.data);
    });

    it("should throw an error when login fails", async () => {
      const mockResponse = {
        status: 400,
        data: {
          token: "testToken",
        },
      };
      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      // Call the login function and expect it to throw an error
      await expect(
        authService.login("username", "password", true)
      ).rejects.toThrow("Login failed.");

      // Check if axios.post was called with the correct parameters
      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_LOGIN, {
        username: "username",
        password: "password",
        remember: true,
      });
    });
  });

  describe("register", () => {
    it("should register a user successfully", async () => {
      const mockResponse = {
        status: 201,
        data: {
          username: "string",
          email: "string",
          name: "string",
          address: "string",
          isTwoFAEnabled: true,
          contact: "string",
          avatar: "string",
          status: "string",
          createdAt: "2023-05-19T12:46:55.070Z",
          updatedAt: "2023-05-19T12:46:55.070Z",
        },
      };
      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse); // Mock the axios.post method to return the mockResponse

      // Provide test data
      const username = "testuser";
      const email = "test@example.com";
      const password = "testpassword";
      const name = "Test User";

      // Call the register function
      const result = await authService.register(
        username,
        email,
        password,
        name
      );

      // Check if the result matches the expected output
      expect(result).toEqual(mockResponse.data);

      // Check if axios.post was called with the correct parameters
      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_REGISTER, {
        username: username,
        email: email,
        password: password,
        name: name,
      });
    });

    it("should throw an error when registration fails", async () => {
      const mockResponse = {
        status: 400,
        data: {
          message: "something went wrong",
        },
      };
      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      // Provide test data
      const username = "testuser";
      const email = "test@example.com";
      const password = "testpassword";
      const name = "Test User";

      // Call the register function and expect it to throw an error
      await expect(
        authService.register(username, email, password, name)
      ).rejects.toThrow("Registration failed.");

      // Check if axios.post was called with the correct parameters
      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_REGISTER, {
        username: username,
        email: email,
        password: password,
        name: name,
      });
    });
  });

  describe("TwoFA", () => {
    it("should toggle TwoFA", async () => {
      const mockResponse = {
        status: 204,
        data: {
          success: true,
          qrCodeUri: "qrCodeData",
        },
      };
      (axios.put as jest.Mock).mockResolvedValueOnce(mockResponse); // Mock the axios.post method to return the mockResponse

      // Provide test data
      const isTwoFAEnabled = true;

      // Call the register function
      const result = await authService.toggle2FA(isTwoFAEnabled);

      // Check if the result matches the expected output
      expect(result).toEqual(mockResponse.data);

      // Check if axios.put was called with the correct parameters
      expect(axios.put).toHaveBeenCalledWith(apiUrls.USER_TOGGLE_2FA, {
        isTwoFAEnabled,
      });
    });

    it("should throw an error when toggle fails", async () => {
      const mockResponse = {
        status: 400,
        data: {
          message: "already enabled",
        },
      };
      (axios.put as jest.Mock).mockResolvedValueOnce(mockResponse);

      // Provide test data
      const isTwoFAEnabled = true;

      // Call the register function and expect it to throw an error
      await expect(authService.toggle2FA(isTwoFAEnabled)).rejects.toThrow(
        "2FA toggle failed."
      );

      // Check if axios.put was called with the correct parameters
      expect(axios.put).toHaveBeenCalledWith(apiUrls.USER_TOGGLE_2FA, {
        isTwoFAEnabled: isTwoFAEnabled,
      });
    });

    it("should be able to authenticate 2FA", async () => {
      const mockResponse = {
        status: 200,
        data: {
          success: true,
        },
      };
      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse); // Mock the axios.post method to return the mockResponse

      // Provide test data
      const code = "testCode";

      // Call the register function
      const result = await authService.authenticateTwoFA(code);

      // Check if the result matches the expected output
      expect(result).toEqual(mockResponse.data);

      // Check if axios.post was called with the correct parameters
      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_AUTHENTICATE, {
        code: code,
      });
    });

    it("should throw an error when 2FA authentication fails", async () => {
      const mockResponse = {
        status: 400,
        data: {
          message: "invalid Code",
        },
      };
      (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

      // Provide test data
      const code = "testCode";

      // Call the register function and expect it to throw an error
      await expect(authService.authenticateTwoFA(code)).rejects.toThrow(
        "2FA authentication failed."
      );

      // Check if axios.post was called with the correct parameters
      expect(axios.post).toHaveBeenCalledWith(apiUrls.USER_AUTHENTICATE, {
        code: code,
      });
    });
  });
});
