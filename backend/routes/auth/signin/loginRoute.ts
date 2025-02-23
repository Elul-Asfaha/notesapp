import express from "express";
import User from "../../../model/userSchema";

const router = express.Router();
router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            username: username,
        });
        console.log(user);
        if (!user) {
            res.status(401).json({ error: "Invalid username or password" });
        }
        res.status(201).json({
            message: "Logged in successfully",
            user: user,
        });
        return;
    } catch (err) {
        err;
    }
});

export default router;
