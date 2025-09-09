import express from "express";

import adminRoutes from "./admin/admin-route.js";
import authRoutes from "./auth/auth-route.js";
import userRoutes from "./user/user-route.js";
import chatGroupRoutes from "./chat-group/chat-group-route.js";

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);
router.use('/chat-group', chatGroupRoutes);

export default router;
