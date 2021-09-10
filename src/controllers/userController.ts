import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export class UserController {
    static async getEveryone() {
        return (await User.find({}).lean()) as User[];
    }

    static async getById(id: string) {
        return (await User.findById(id).lean()) as User;
    }

    static async create(info: User) {
        const salt = 10;
        const tokenSecret = process.env.TOKEN_SECRET!;
        info.password = await bcrypt.hashSync(info.password, salt);

        const newUser = await new User(info).save();
        return jwt.sign(newUser.id, tokenSecret);
    }
}
