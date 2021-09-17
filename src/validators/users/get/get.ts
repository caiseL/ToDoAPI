import { checkIfUserAlreadyExists } from "./exists";

export const userGetValidator = (userID: string) => {
    let errors: Error[] = [];

    try {
        checkIfUserAlreadyExists(userID);
    } catch (e: any) {
        errors.push({
            name: e.name,
            message: e.message,
        });
    }

    return errors;
};
