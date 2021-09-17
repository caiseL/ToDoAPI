import { User } from "../models/User";
import { hashPassword } from "../utils/hashPassword";
import { signJWT } from "../utils/signJWT";

export class UserController {
    static async getEveryone() {
        return (await User.find({}).lean()) as User[];
    }

    static async getById(userID: string) {
        return (await User.findById(userID).lean()) as User | null;
    }

    static async create(userInfo: User) {
        userInfo.password = await hashPassword(userInfo.password);

        const newUser = await new User(userInfo).save();
        return signJWT(newUser.id);
    }

    static async update(userID: string, newUserInfo: User) {
        if (newUserInfo.password)
            newUserInfo.password = await hashPassword(newUserInfo.password);

        return await User.findByIdAndUpdate(userID, newUserInfo, {
            new: true,
        });
    }

    static async delete(userID: string) {
        await User.findByIdAndDelete(userID);
        // remover el token
    }

    static async exists(id: string) {
        return await User.exists({
            id: id,
        });
    }
}
