import { UserController } from "../../../controllers/userController";
import { UserAlreadyExistsError } from "../../errors/users/email/exists";
import { InvalidEmailError } from "../../errors/users/email/invalidEmail";
import { NoEmailError } from "../../errors/users/email/noEmail";

export const userEmailValidator = async (email: string) => {
    if (!email) throw new NoEmailError();
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regExp.test(email)) throw new InvalidEmailError();

    if (await UserController.exists(email)) throw new UserAlreadyExistsError();
};
