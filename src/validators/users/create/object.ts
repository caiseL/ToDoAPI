import { EmptyUserError } from "../../errors/users/emptyUser";

export const userInfoValidator = (userInfo: { [key: string]: string }) => {
    if (!userInfo || Object.keys(userInfo).length === 0)
        throw new EmptyUserError();
};
