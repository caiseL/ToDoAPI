import { TypesOfErrors } from "../../typesOfErrors";

export class PasswordLengthError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter a password that's more than 4 characters long";
}
