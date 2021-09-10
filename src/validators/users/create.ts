import { userInfoValidator } from "./object";
import { userPasswordValidator } from "./password";

export const userCreateValidator = (userInfo: { [key: string]: string }) => {
    let errors: Error[] = [];

    try {
        userInfoValidator(userInfo);
        userPasswordValidator(userInfo.password);
        console.log("Todo bn");
        return;
        // Verificar email
        // Y el nombre
    } catch (e: any) {
        errors.push({
            name: e.name,
            message: e.message,
        });
    }

    return errors.length === 0 ? undefined : errors;
};
