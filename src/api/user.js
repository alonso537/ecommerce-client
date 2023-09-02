import { authFetch } from "@/utils/authFetcher";
const { ENV } = require("@/utils/constanst");




export class User {
  async getMe(token) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS_ME}`;
      // const params = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // };

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
