import express from "express";

import adminRoutes from "./admin/admin-route.js";
import authRoutes from "./auth/authRoute.js";

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);

export default router;
