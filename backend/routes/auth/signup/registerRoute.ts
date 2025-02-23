import express from "express";
import User from "../../../model/userSchema";
import bcrypt from "bcryptjs";

const router = express.Router();
router.post("/register", async (req, res) => {
    try {
        const { password, email, username } = req.body;
        if (!password || !email || !username) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }
        const existingUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        console.log("existingUser", existingUser);
        if (existingUser) {
            res.status(400).json({
                error: "Username or Email already exists",
            });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
        });
        return;
    } catch (error: any) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

export default router;
