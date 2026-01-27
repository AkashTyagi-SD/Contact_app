import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import employeeRoute from "./routes/employee.route";
import userRoute from "./routes/user.route";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/employee/", employeeRoute);
app.use("/api/auth/", userRoute);

const PORT: number = 8800;

app.listen(PORT, () => {
  try {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT,
    );
  } catch (e) {
    console.log("error", e);
  }
});
