import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { userRouter } from "./routers/userRouter";
import { index } from "./views";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

app.get("/", index);
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
