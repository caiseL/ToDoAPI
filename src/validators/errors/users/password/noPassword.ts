import { TypesOfErrors } from "../../typesOfErrors";

export class NoPasswordError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter a password";
}
