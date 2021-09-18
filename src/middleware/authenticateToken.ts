import jwt, { JwtPayload } from "jsonwebtoken";
import express from "express";
import { isStringObject } from "util/types";

export const authenticateToken = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const token = req.headers.authorization;
    const tokenSecret = process.env.TOKEN_SECRET!;
    if (!token) return res.sendStatus(403);

    const decodedToken = await jwt.verify(token, tokenSecret);
    console.log(decodedToken);

    if (typeof decodedToken === "string") {
        console.log("B");
    }

    if (isStringObject(decodedToken)) {
        console.log("A");

        return;
    }

    req.user.id = decodedToken.user.id;

    next();
};
