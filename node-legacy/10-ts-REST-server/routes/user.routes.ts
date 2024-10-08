import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/users.controller";

const router: Router = Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
