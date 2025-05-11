import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken"
import { secret_key } from "../../utils/env";

export const signIn = async (req: Request, res: Response) => {

    // const { email, password } = req.body
    console.log(req.cookies, "cookie");

    const email = "gan31d3@gmail.com";
    const password = "password"
    console.log(email, password);

    // console.log(username, password, email);



    try {
        const user = await prisma.user.findUnique({
            where: { email: email },

        });

        if (!user) return res.send({ message: "user not found" })
        const isMatch = compareSync(password, user.password)
        if (!isMatch) return res.send({ message: "Email or password wrong" })

        const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 })

        return res.cookie("token", token, {
            maxAge: 60 * 1000 * 10,
            secure: false
        })
            .send()


    } catch (error) {
        return res.send(error);
    }
};
