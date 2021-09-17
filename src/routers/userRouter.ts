import express from "express";
import { normalizeUserData } from "../middleware/normalizeUserData";
import { UserViews } from "../views/userViews";

export const userRouter = express.Router();

userRouter.get("/", (req: express.Request, res: express.Response) => {
    return UserViews.get(req, res);
});

userRouter.get("/:id", (req: express.Request, res: express.Response) => {
    return UserViews.getById(req, res);
});

userRouter.post(
    "/",
    normalizeUserData,
    (req: express.Request, res: express.Response) => {
        return UserViews.post(req, res);
    }
);

userRouter.put(
    "/",
    normalizeUserData,
    (req: express.Request, res: express.Response) => {
        return UserViews.put(req, res);
    }
);
