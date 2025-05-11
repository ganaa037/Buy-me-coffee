import { Router } from "express";
import { createUser, deleteUserById, getUser, updataUserById } from "../controllers/user";
import { ppid } from "process";
export const userRouter = Router()


userRouter
  .post("/", createUser as any)
  .get("/", getUser as any)
  .put("/:id", updataUserById as any)
  .delete("/:id", deleteUserById as any)





