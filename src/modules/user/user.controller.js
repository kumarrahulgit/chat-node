import httpStatus from "../../utils/httpStatus.js";
import { createUserService, getUsersService, updateUserService } from "./user.service.js";

export async function createUser(req, res) {
    try {
        const user = await createUserService(req.body);

        return res.status(httpStatus.SUCCESS).json({
            message: "User created",
            data: user
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function updateUser(req, res) {
    try {
        const userId = req.user.id;
        const user = await updateUserService(userId, req.body);

        return res.status(httpStatus.SUCCESS).json({
            message: "User updated",
            data: user
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function getUsers(_, res) {
    try {
        const users = await getUsersService();

        return res.status(httpStatus.SUCCESS).json({
            message: 'User route',
            data: users
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}