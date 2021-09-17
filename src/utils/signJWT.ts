import jwt from "jsonwebtoken";

const tokenSecret = process.env.TOKEN_SECRET!;
export const signJWT = (userID: string) =>
    jwt.sign(
        {
            id: userID,
        },
        tokenSecret,
        {
            expiresIn: "2d",
        }
    );
