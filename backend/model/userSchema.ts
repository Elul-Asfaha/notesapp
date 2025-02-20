import mongoose from "mongoose";
import { Schema } from "mongoose";
import { isEmail } from "validator";
interface IUser {
    username: string;
    email: string;
    password: string;
}
const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [isEmail, "Please provide a valid email"],
    },
    password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
