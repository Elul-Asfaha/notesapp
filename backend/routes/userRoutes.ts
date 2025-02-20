import express from "express";
import User from "../model/userSchema";

const router = express.Router();
router.post("/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// router.get("/user/:id", async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json(user);
// });

export default router;
