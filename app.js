import express from "express";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

config({
  path: "./data/config.env",
});

// using middle ware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials: true //ata jodi na use kori tahole Headings a kisc6u jabe na****
}));

// usingroutes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

// using error middle ware
app.use(errorMiddleware);
