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

    it("should throw an error when login fails", async () => {
      const mockResponse = {
        data: {
          token: "testToken",
          code: 400,
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
        data: {
          code: 200,
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
        username,
        email,
        password,
        name,
      });
    });

    it("should throw an error when registration fails", async () => {
      const mockResponse = {
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
          code: 400,
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
        username,
        email,
        password,
        name,
      });
    });
  });
});
