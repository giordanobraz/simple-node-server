import { Router } from "express";
import AuthenticateUserController from "./../.history/src/controllers/AuthenticateUserController_20211019161451";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
