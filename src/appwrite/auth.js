import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name, phone }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
        phone
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppwriteService :: getCurrentUser :: error ::", error);
    }
    return null;
  }

  async updateUser(userId, data) {
    try {
      // return await this.account.updatePrefs(userId, { data });
      const result = await this.account.updatePrefs(userId, {
        preferences: { data },
      });
      return result;
    } catch (error) {
      console.log("AppwriteService :: updateUser :: error ::", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("AppwriteService :: logout :: error ::", error);
    }
  }
  // New Forgot Password Method
  // async forgotPassword(email) {
  //   try {
  //     // Pass your reset URL here
  //     const resetUrl = `${conf.appUrl}/reset-password`;
  //     await this.account.createRecovery(email, resetUrl);
  //     console.log("Password reset link sent successfully.");
  //   } catch (error) {
  //     console.log("AppwriteService :: forgotPassword :: error ::", error);
  //     throw error;
  //   }
  // }

  // Add this method in your authService
  async forgotPassword(email) {
    try {
      return await this.account.createRecovery(
        email,
        `${window.location.origin}/reset-password`
      );
    } catch (error) {
      throw error; // Re-throw error to handle in component
    }
  }

  // New Reset Password Method
  // async resetPassword(userId, secret, newPassword) {
  //   try {
  //     await this.account.updateRecovery(
  //       userId,
  //       secret,
  //       newPassword,
  //       newPassword
  //     );
  //     console.log("Password reset successfully.");
  //   } catch (error) {
  //     console.log("AppwriteService :: resetPassword :: error ::", error);
  //     throw error;
  //   }
  // }

  // Add this method in your authService
  async resetPassword(userId, secret, newPassword) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        newPassword,
        newPassword
      );
    } catch (error) {
      throw error; // Re-throw error to handle in component
    }
  }
}

const authService = new AuthService();

export default authService;
