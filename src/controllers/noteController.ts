import { User } from "./../models/User";
import { Note } from "../models/Note";
import { UserController } from "./userController";

export class NoteController {
    static async getById(noteId: string) {
        return (await Note.findById(noteId).lean()) as Note;
    }

    static async getFromUser(userId: string) {
        return (await Note.find({ postedBy: userId }).lean()) as Note[];
    }

    static async create(noteInfo: Note) {
        const note = await new Note(noteInfo).save();
        await UserController.addNote(note.postedBy, note.id);
        return note;
    }

    static async update(noteId: string, noteInfo: Note) {
        return await Note.findByIdAndUpdate(noteId, noteInfo, { new: true });
    }

    static async delete(noteId: string) {
        //
    }
}
