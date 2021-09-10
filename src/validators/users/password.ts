import { NoPasswordError } from "../errors/users/password/noPassword";
import { PasswordLengthError } from "../errors/users/password/passwordLength";

export const userPasswordValidator = (password: string) => {
    if (!password) throw new NoPasswordError();

    if (4 > password.length) throw new PasswordLengthError();
};
