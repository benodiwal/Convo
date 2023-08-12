import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user  = User.findOne({
            email: email
        });

        if (!user) return res.status(400).send("User does not exist")

        const isMatched = bcrypt.compare(password, user,password);

        if (!isMatched) return res.status(400).send("Invalid Credentials");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        return res.status(200).send({ token, user});

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}