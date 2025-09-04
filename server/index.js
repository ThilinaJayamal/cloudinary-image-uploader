import express from "express";
import cors from "cors";
import cloudinaryRouter from "./routes/cloudinaryRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}
));

app.use("/api/upload", cloudinaryRouter);

app.listen(3000, () => {
    console.log("server is running on :3000");
})