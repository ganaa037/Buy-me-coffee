import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt"

// const checkUserAlready
const checkUser = async (req: Request, res: Response) => {
    const { username } = req.body
    try {
        const user = await prisma.user.findUnique({
             where: {name: username } })
        if (user) {
            return res.send({ message: "username already taken" })
        }
        return res.send({ message: "Username available" })

    } catch (error) {

    }
}

export const signUp = async (req: Request, res: Response) => {
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
