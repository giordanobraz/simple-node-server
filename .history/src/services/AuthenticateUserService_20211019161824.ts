import axios from "axios";
import 'dotenv/config'

export default class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token'
    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB.CLIENT_ID,
        client_secret: process.env.GITHUB.CLIENT_SECRET,
        code,
      }
    }) 
  }
}