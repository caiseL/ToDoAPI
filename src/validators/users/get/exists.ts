import { UserController } from "../../../controllers/userController";
import { UserDoesntExistsError } from "../../errors/users/doesntExists";

export const checkIfUserAlreadyExists = (userID: string) => {
    if (!UserController.exists(userID)) throw new UserDoesntExistsError();
};
