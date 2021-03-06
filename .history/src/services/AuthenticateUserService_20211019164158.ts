import axios from "axios";

interface IAccessTokenResponse {
  access_token: string;
}

export default class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          "Accept": "application/json",
        },
      });

    const response = await axios.get("https://github.com/user", {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`,
      },
    });

    return response;
  }
}
