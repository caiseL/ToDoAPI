import { Document, Schema, model } from "mongoose";

export interface Note extends Document {
    title: string;
    status: Status;
    description?: string;
    tags?: Array<string>;
    postedBy: string;
}

enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        status: {
            type: String,
            enum: Status,
            required: true,
            default: Status.PENDING,
        },
        tags: [
            {
                ref: "Tag",
                type: Schema.Types.ObjectId,
            },
        ],
        postedBy: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },
    },
    { timestamps: true }
);

export const Note = model<Note>("Note", noteSchema);
