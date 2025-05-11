import { Router } from "express";
import { signIn } from "../controllers/auth/sign-in.controller";
export const authRouter = Router()


authRouter.get("/", signIn as any)