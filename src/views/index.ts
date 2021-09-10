import express from "express";
export const index = (req: express.Request, res: express.Response) => {
    const index = {
        index: {
            users: {
                GET: "/",
                POST: "/",
            },
            toDo: {
                GET: "/",
                POST: "/",
            },
        },
    };
    res.send(index);
};
