import express from "express"
import friends from "../controllers/friends";

const router = express.Router();
router.get('/friends', friends);

export default router;