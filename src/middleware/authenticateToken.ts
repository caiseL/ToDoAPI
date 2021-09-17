import express from "express";

export const authenticateToken = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    next();
};
