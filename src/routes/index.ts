import { Router, Request, Response } from "express";
import UsersRouter from "./usersRouter";
import NotesRouter from "./notesRouter";
import WifisRouter from "./wifisRouter";
import CredentialsRouter from "./credentialsRouter";
import CardsRouter from "./cardsRouter";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("Online");
});
router.use(UsersRouter);
router.use(NotesRouter);
router.use(WifisRouter);
router.use(CredentialsRouter);
router.use(CardsRouter);

export default router;
