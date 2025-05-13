import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body
  // console.log(username, password, email);

  const hashedPassword = bcrypt.hashSync(password, 10)

  try {
    const response = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: username
      },
    });
    return res.send({
      success: true,
      message: response
    });
  } catch (error) {
    return res.send(error);
  }
};





export const getUser = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res.send({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(400).send({ success: false });
  }
};

export const updataUserById = async (req: Request, res: Response) => {
  const { id } = req.params;


  const { email, name, password } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, name },
    });
    return res.send({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.send({ message: error });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.send({
      success: true,
      data: response
    });
  } catch (error) {
    return res.send({ message: error });
  }
};
