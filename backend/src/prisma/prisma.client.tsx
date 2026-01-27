import * as Prisma from "@prisma/client";
const { PrismaClient } = Prisma;

const prisma = new PrismaClient({ log: ["query", "info"] });

export default prisma;
