import express from 'express';
import { getRefreshToken, login, logout } from '../../modules/auth/auth.controller.js';

const authRouter = express();

authRouter.post("/login", login);
authRouter.get("/refresh-token", getRefreshToken);
authRouter.post("/logout", logout);

export default authRouter;