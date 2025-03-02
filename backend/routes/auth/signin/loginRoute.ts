import express from "express";
import User from "../../../model/userSchema";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../../../middlewares/accessToken";
import { generateRefreshToken } from "../../../middlewares/refreshToken";
const router = express.Router();
router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            username: username,
        });
        if (!user) {
            res.status(401).json({ error: "Invalid username or password" });
            return;
        }
        const userPassword = user.password;
        const checkPassword = await bcrypt.compare(password, userPassword);
        if (!checkPassword) {
            res.status(401).json({ error: "Invalid username or password" });
            return;
        }
        console.log(
            "tokens generated",
            generateAccessToken(user._id.toString())
        );

        const accessToken = await generateAccessToken(user._id.toString());
        const refreshToken = await generateRefreshToken(user._id.toString());

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });
        console.log("cookies set");
        res.status(200).json({
            message: "Logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });

        return;
    } catch (err) {
        err;
    }
});

export default router;
