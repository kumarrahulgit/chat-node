import express from 'express';
import { testEndpoint } from '../../modules/auth/auth.controller.js';

const authRouter = express();
authRouter.get("/test", testEndpoint);

export default authRouter;