import express from "express";

import adminRoutes from "./admin/admin-route.js";
import authRoutes from "./auth/authRoute.js";
import userRoutes from "./user/userRoute.js";

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router;
