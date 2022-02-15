import {Request, Response} from 'express'
import AuthenticateUserService from '../services/AuthenticateUserService'

export default class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const service = new AuthenticateUserService();
    // service.execute(res);
  }
}