import { sendMail } from "../utils/mailer";
import prisma from "../prisma/prisma.client";
import { User } from "@prisma/client";

/**
 * Description: The service layer will handle the business logic and interact with Prisma. Here’s how the user service might look:
 */

export const createUser = async (user: any): Promise<User> => {
  const createdUser = await prisma.user.create({ data: user });
  return createdUser;
};

// Fetches a user by email
export const fetchUser = async (email: string): Promise<User | null> => {
  const user = await prisma.$queryRaw<
    User[]
  >`SELECT * FROM "User" WHERE email = ${email}`;
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: email,
  //   },
  // });
  return user[0];
};

// Returns the OTP if user exists, otherwise null
export const verifyEmail = async (email: string): Promise<object | null> => {
  const user = await prisma.user.findUnique({ where: { email: email } });
  if (user) {
    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    // Send OTP to user's email
    await sendMail(
      email,
      "Your Verification OTP",
      `Your OTP for verification is: ${otp}`,
    );
    return { isverify: { email: user.email, verified: true }, OTP: otp };
  }
  return null;
};

// Updates the user's password based on their email
export const updatePassword = async (
  email: string,
  user: any,
): Promise<User | null> => {
  const updatedPassword = await prisma.user.update({
    where: {
      email,
    },
    data: user,
  });
  return updatedPassword;
};

/**
 * Fetches all users along with their associated employee details.
 * @returns
 */
export const fetchUsersWithEmployeeDetails = async (): Promise<any> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      employee: {
        select: {
          empid: true,
          firstname: true,
          lastname: true,
          birthofdate: true,
          joiningdate: true,
          status: true,
        },
      },
    },
  });
  return users;
};
