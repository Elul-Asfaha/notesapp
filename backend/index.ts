import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import registerRoute from "./routes/auth/signup/registerRoute";
import loginRoute from "./routes/auth/signin/loginRoute";
import refreshTokenRoute from "./routes/auth/refreshtoken/refreshTokenRoute";

import cookieparser from "cookie-parser";
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());
const mongo_Uri = process.env.mongo_Uri || "";

mongoose
    .connect(mongo_Uri)
    .then(() => console.log("connected to mongoDb"))
    .catch((err) => console.error("mongodb not connected", err));

app.get("/", (req, res) => {
    res.send("Conntected");
});

app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", refreshTokenRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening", PORT);
});
