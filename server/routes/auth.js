import express from "express"
import { login, register } from "../controllers/auth.js";
import search from "../controllers/search.js";

const router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.get("/results", search);

export default router;