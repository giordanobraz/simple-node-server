import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const auth_token = req.headers.authorization;

  if (!auth_token) {
    return res.status(401).json({
      error: "Token inválido.",
    });
  }

  const [, token] = auth_token.split(" ");
  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.user_id: sub;
  } catch (error) {
    return res.status(401).json({
      error: "Token expirado.",
    });
  }
}
