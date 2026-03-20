import { Router } from "express";
import {
  loginUser,
  createNewUser,
  fetchUsersDetails,
  updatedPassword,
  verifyEmailOfUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/create-user", createNewUser);
router.post("/login", loginUser);
router.get("/fetchUsers", fetchUsersDetails);
router.put("/update-password", updatedPassword);
router.post("/verify-email", verifyEmailOfUser);

export default router;
