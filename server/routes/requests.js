import express from "express"
import requests from "../controllers/requests";

const router = express.Router();
router("/requests", requests);

export default router;