import jwt from "jsonwebtoken";
export const generateRefreshToken = async (userId: string) => {
    const SECRET_KEY = process.env.SECRET_KEY || "";
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "7d" });
};
