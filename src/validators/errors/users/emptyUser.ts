import { TypesOfErrors } from "../typesOfErrors";

export class EmptyUserError implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter user info";
}
