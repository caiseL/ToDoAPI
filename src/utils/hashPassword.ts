import bcrypt from "bcrypt";

const salt = 10;
export const hashPassword = async (password: string) =>
    await bcrypt.hashSync(password, salt);
