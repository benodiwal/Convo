import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = await req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        const user  = await User.findOne({
            email: email
        });

        if (!user) return res.status(400).send("User does not exist")

        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) return res.status(400).send("Invalid Credentials");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        return res.status(200).send({ token, user});

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}