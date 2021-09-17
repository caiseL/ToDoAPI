import { TypesOfErrors } from "../../typesOfErrors";

export class InvalidEmailError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter a valid email";
}
