import express from "express";
import validator from "../../middleware/validator.js";
import { createUser, updateUser } from "../../modules/user/user.controller.js";
import { createUserSchema, updateUserSchema, } from "../../modules/user/user.schema.js";
import { verifyUser } from "../../middleware/auth.js";

const router = express();

router.use(verifyUser);

router.post("/create-user", validator(createUserSchema), createUser);
router.post("/update-user", validator(updateUserSchema), updateUser);

export default router;
