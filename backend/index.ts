import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const mongo_Uri = process.env.mongo_Uri || "";
mongoose
    .connect(mongo_Uri)
    .then(() => console.log("connected to mongoDb"))
    .catch((err) => console.error("mongodb not connected", err));

app.get("/", (req, res) => {
    res.send("Conntected");
});
console.log("here");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening", PORT);
});
