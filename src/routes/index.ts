import { Router, Request, Response } from "express";
import UsersRouter from "./users.router";
import NotesRouter from "./notes.router";
import WifisRouter from "./wifis.router";
import CredentialsRouter from "./credentials.router";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Online");
});
router.use(UsersRouter);
router.use(NotesRouter);
router.use(WifisRouter);
router.use(CredentialsRouter);

export default router;
