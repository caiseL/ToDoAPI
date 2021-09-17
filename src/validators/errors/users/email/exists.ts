import { TypesOfErrors } from "../../typesOfErrors";

export class UserAlreadyExistsError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "A user with that email already exists";
}
