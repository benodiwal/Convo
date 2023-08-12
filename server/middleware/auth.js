import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.header("Authorization");

        if (!token) return req.status(403).send("Access Denied");

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt(token, process.env.JWT_SECRET)
        req.user = verified;

        next();

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    
}