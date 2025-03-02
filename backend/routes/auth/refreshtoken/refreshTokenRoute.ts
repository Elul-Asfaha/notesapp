import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { generateAccessToken } from "../../../middlewares/accessToken";
const router = express.Router();

router.post("/refreshaccesstoken", async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    const SECRET_KEY = process.env.SECRET_KEY as string;

    if (!process.env.SECRET_KEY) {
        res.status(500).json({ error: "Internal server error" });
        return;
    }

    if (!refreshToken) {
        res.status(401).json({ error: "No refresh token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(refreshToken, SECRET_KEY) as JwtPayload;
        if (!decoded.id) {
            res.status(403).json({ error: "Invalid refresh token" });
            return;
        }
        const newAccessToken = await generateAccessToken(decoded.id);

        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });
        res.json({
            message: "Access token refreshed successfully",
        });
        return;
    } catch (err: any) {
        res.status(403).json({
            error: "Invalid refresh token",
        });
        return;
    }
});

export default router;
