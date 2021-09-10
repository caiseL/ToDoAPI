import { Document, Schema, model } from "mongoose";

export interface User extends Document {
    profileName: string;
    profilePhoto?: string;
    email: string;
    ToDo?: Array<string>;
    password: string;
}

const userSchema = new Schema(
    {
        profileName: {
            type: String,
            required: true,
        },
        profilePhoto: String,
        email: {
            type: String,
            required: true,
        },
        ToDo: [{ type: Schema.Types.ObjectId, ref: "ToDo" }],
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const User = model<User>("User", userSchema);
