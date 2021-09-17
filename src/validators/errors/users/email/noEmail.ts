import { TypesOfErrors } from "../../typesOfErrors";

export class NoEmailError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter a email";
}
