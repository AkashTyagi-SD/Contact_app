import prisma from "../prisma/prisma.client";
import { Employee } from "@prisma/client";

const getAllEmployees = (): Promise<any> => prisma.employee.findMany({});

const addEmployee = async (employee: Employee): Promise<Employee | null> => {
  const createdEmployee = await prisma.employee.create({ data: employee });
  return createdEmployee;
};

export { getAllEmployees, addEmployee };
