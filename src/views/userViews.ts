import express from "express";
import { UserController } from "./../controllers/userController";
import { userCreateValidator } from "../validators/users/create/create";

export class UserViews {
    static async get(req: express.Request, res: express.Response) {
        const users = await UserController.getEveryone();

        return res.status(200).send({ users: users });
    }

    static async getById(req: express.Request, res: express.Response) {
        const userID = req.params.id;

        const user = await UserController.getById(userID);

        if (!user) return res.status(400).send();

        return res.status(200).send({ users: user });
    }

    static async post(req: express.Request, res: express.Response) {
        const userInfo = req.body;

        const errors = userCreateValidator(userInfo);
        if (errors) return res.status(400).send({ errors: errors });

        console.log("A");
        const token = await UserController.create(userInfo);
        return res.status(201).send({ token: token });
    }

    static async login(req: express.Request, res: express.Response) {}

    static async put(req: express.Request, res: express.Response) {
        console.log(req.headers.host);
    }
}
