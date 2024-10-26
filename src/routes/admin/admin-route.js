import express from "express";
import { adminTestEndpoint, createUser } from "../../modules/auth/auth.controller.js";

const router = express();

router.get("/test", adminTestEndpoint);
router.post("/create-user", createUser);

export default router;
