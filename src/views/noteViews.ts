import express from "express";
import { NoteController } from "../controllers/noteController";

export class NoteViews {
    static async get(req: express.Request, res: express.Response) {
        const userID = req.user.id;

        const notes = await NoteController.getFromUser(userID);

        if (!notes) return res.status(400).send({ errors: notes });

        return res.status(200).send({ toDo: notes });
    }

    static async getById(req: express.Request, res: express.Response) {
        const noteID = req.params.id;

        const notes = await NoteController.getFromUser(noteID);

        if (!notes) return res.status(400).send({ errors: notes });

        return res.status(200).send({ toDo: notes });
    }

    static async post(req: express.Request, res: express.Response) {
        const noteInfo = req.body;
        noteInfo.postedBy = req.user.id;

        //Validaciones

        const note = await NoteController.create(noteInfo);

        return res.status(201).send({ note: note });
    }

    static delete(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }

    static put(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
}
