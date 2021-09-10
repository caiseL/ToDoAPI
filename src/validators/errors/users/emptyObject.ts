import { TypesOfErrors } from "../typesOfErrors";

export class EmptyUserObject implements Error {
    name = TypesOfErrors.SYNTAX;
    message = "You need to enter user info";
}
