import express from "express";

import adminRoutes from "./admin/admin-route.js";
import authRoutes from "./auth/authRoute.js";
import { testEndpoint } from "../modules/auth/auth.controller.js";

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/test', testEndpoint);
router.use('/admin', adminRoutes);

export default router;
