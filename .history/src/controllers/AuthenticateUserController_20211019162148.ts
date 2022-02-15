import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

export default class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;
    const service = new AuthenticateUserService();
    const result = service.execute(code);

    return res.json(result);
  }
}
