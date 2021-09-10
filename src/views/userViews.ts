import { UserController } from "./../controllers/userController";
import express from "express";
import { userCreateValidator } from "../validators/users/create";

export class UserViews {
    static async get(req: express.Request, res: express.Response) {
        const users = UserController.getEveryone();

        return res.status(200).send({ users: users });
    }

    static async getById(req: express.Request, res: express.Response) {
        const userID = req.params.id;
        const user = UserController.getById(userID);

        return res.status(200).send({ users: user });
    }

    static async post(req: express.Request, res: express.Response) {
        const userInfo = req.body;

        const errors = userCreateValidator(userInfo);
        if (errors) {
            res.status(400).send({ errors: errors });
        }

        const token = UserController.create(userInfo);
    }

    static async put(req: express.Request, res: express.Response) {
        console.log(req.headers.host);
    }
}
