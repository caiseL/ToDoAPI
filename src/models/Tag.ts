import { Document, Schema, model } from "mongoose";

export interface Tag extends Document {
    title: string;
}

const tagSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Tag = model<Tag>("Tag", tagSchema);
