import { Router } from "express";
import {
  loginUser,
  createNewUser,
  fetchUsersDetails,
  updatedPassword,
} from "../controllers/user.controller";

const router = Router();

router.post("/create-user", createNewUser);
router.post("/login", loginUser);
router.get("/fetchUsers", fetchUsersDetails);
router.put("/update-password", updatedPassword);

export default router;
