import express from "express";
import { NoteViews } from "../views/noteViews";

export const noteRouter = express.Router();

noteRouter.get("/", (req: express.Request, res: express.Response) => {
    NoteViews.get(req, res);
});

noteRouter.post("/", (req: express.Request, res: express.Response) => {
    NoteViews.post(req, res);
});

noteRouter.get("/:id", (req: express.Request, res: express.Response) => {
    NoteViews.getById(req, res);
});
