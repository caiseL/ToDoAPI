import jwt from "jsonwebtoken";
import { User } from "../models/User";

const tokenSecret = process.env.TOKEN_SECRET!;
export const signJWT = (user: User) =>
    jwt.sign(
        {
            user: {
                id: user.id,
            },
        },
        tokenSecret,
        {
            expiresIn: "2d",
        }
    );
