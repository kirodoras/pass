import { Router, Request, Response } from "express";
import UsersRouter from "./users.router";
import NotesRouter from "./notes.router";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Online");
});
router.use(UsersRouter);
router.use(NotesRouter);

export default router;
