import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  fetchUser,
  createUser,
  fetchUsersWithEmployeeDetails,
  updatePassword,
  verifyEmail,
} from "../services/user.service";

/**
 *
 * @param req
 * @param res
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await fetchUser(email);
    if (!user) {
      res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch: any = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(403).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({
      status: true,
      message: "Login Successfully",
      data: { token: token, userId: user.id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error : ${error}` });
  }
};

/**
 *
 * @param req
 * @param res
 */
export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userAdded = await createUser({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      status: true,
      message: "User registerd successfully",
      data: userAdded,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error : ${error}` });
  }
};

export const fetchUsersDetails = async (req: Request, res: Response) => {
  try {
    const usersData = await fetchUsersWithEmployeeDetails();
    res.status(200).json({
      status: true,
      message: "Data fetch successfully",
      data: usersData,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error:${error}` });
  }
};

// This function verifies the email and sends an OTP if the email exists in the database
export const verifyEmailOfUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const verifyData = await verifyEmail(email);
    if (verifyData) {
      res.status(200).json({
        status: true,
        message: "OTP sent to your email",
        data: verifyData,
      });
    } else {
      res.status(404).json({ error: "Email not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: `Internal Server Error Verify email : ${error}` });
  }
};
/**  */
export const updatedPassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userUpdated = await updatePassword(email, {
      password: hashedPassword,
    });
    res.status(200).json({
      status: true,
      message: "Password updated successfully",
      data: userUpdated,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error : ${error}` });
  }
};
