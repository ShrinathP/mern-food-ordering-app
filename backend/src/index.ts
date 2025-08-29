import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});