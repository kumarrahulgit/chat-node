import express from 'express';
import { getUsers } from '../../modules/user/user.controller.js';

const userRouter = express();

userRouter.get("/", getUsers);

export default userRouter;