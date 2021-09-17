import express from "express";

export const normalizeUserData = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const userInfo = req.body;
    if (userInfo.email) userInfo.email.toLowerCase();
    if (userInfo.profileName) userInfo.profileName.toLowerCase();

    next();
};
