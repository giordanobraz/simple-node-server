import { Request, Response } from "express";
import { GetLastMessagesService } from "../services/GetLastMessagesService";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const service = new ProfileUserService();

    const result = await service.execute(user_id);
    return res.json(result);
  }
}

export { ProfileUserController };
