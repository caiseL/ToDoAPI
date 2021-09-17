import { userEmailValidator } from "./email";
import { userInfoValidator } from "./object";
import { userPasswordValidator } from "./password";

export const userCreateValidator = (userInfo: { [key: string]: string }) => {
    let errors: Error[] = [];

    try {
        userInfoValidator(userInfo);
        userEmailValidator(userInfo.email);
        userPasswordValidator(userInfo.password);
    } catch (e: any) {
        errors.push({
            name: e.name,
            message: e.message,
        });
    }

    return errors;
};
