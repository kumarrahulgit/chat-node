import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema, "users");

export default User;
