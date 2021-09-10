import { Document, Schema, model } from "mongoose";

export interface ToDo extends Document {
    title: string;
    status: Status;
    description?: string;
    tags?: Array<string>;
}

enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

const toDoSchema = new Schema(
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
    },
    { timestamps: true }
);

export const ToDo = model<ToDo>("ToDo", toDoSchema);
