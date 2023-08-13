import { mongoose } from "mongoose";

// Define the user Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    profilePicture: {
        type: String,
        default: "",
    }
});

// Create the User model
const User = mongoose.model('User', UserSchema);
export default User;