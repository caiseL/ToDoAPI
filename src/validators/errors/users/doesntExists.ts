import { TypesOfErrors } from "./../typesOfErrors";

export class UserDoesntExistsError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "That user doesn't exists";
}
