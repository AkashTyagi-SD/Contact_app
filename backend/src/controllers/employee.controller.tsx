import { Request, Response } from "express";
import { getAllEmployees, addEmployee } from "../services/employee.service";

export const fetchAllEmployees = async (req: Request, res: Response) => {
  try {
    const employeesData = await getAllEmployees();
    res.status(200).send({
      status: true,
      message: "Data fetch successfully",
      data: employeesData,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error:${error}` });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employeeAdded = await addEmployee(req.body);
    res.status(201).send({
      status: true,
      message: "Employee added sucessfully",
      data: employeeAdded?.empid,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error : ${error}` });
  }
};
