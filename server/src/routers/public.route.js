import express from "express";
import { trackVisitor } from "../controllers/public.controller.js";
import {
  contactLimiter,
  newsletterLimiter,
  trackLimiter,
} from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

//Public
router.post("/track", trackLimiter, trackVisitor);

export default router;
