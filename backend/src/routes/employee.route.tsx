import { Router, Request, Response } from "express";

import {
  fetchAllEmployees,
  createEmployee,
} from "../controllers/employee.controller";
import verifyToken from "../middleware/authMiddleware";

const router = Router();

router.get("/getAllemployees", verifyToken, fetchAllEmployees);

router.post("/create-employee", verifyToken, createEmployee);

export default router;
