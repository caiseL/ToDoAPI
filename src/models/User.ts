import { Document, Schema, model } from "mongoose";

export interface User extends Document {
    profileName: string;
    profilePhoto?: string;
    email: string;
    notes?: Array<string>;
    password: string;
}

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
        profilePhoto: String,
    },
    { timestamps: true }
);

export const User = model<User>("User", userSchema);
