import bcrypt from "bcrypt";
import User from "../../models/user.model.js";
import { SALT_ROUNDS } from "../../utils/constants.js";
import { filterObject } from "../../utils/object.util.js";

async function getPasswordHash(password) {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function createUserService(userData) {
    try {
        const { name, email, password, role = "USER" } = userData;

        const passwordHash = await getPasswordHash(password);

        const user = await User.create({
            name,
            email,
            password: passwordHash,
            role
        });

        return user;
    } catch (ex) {
        return Promise.reject(ex);
    }
}

export async function getUsersService() {
    try {
        const users = await User.find({}).select(["-refreshToken"]);

        return users;
    } catch (ex) {
        return Promise.reject(ex);
    }
}

export async function updateUserService(userId, userData) {
    try {
        const data = filterObject(userData);

        const user = await User.updateOne(
            {
                _id: userId
            },
            data,
            {
                new: true
            }
        );

        return user;
    } catch (ex) {
        return Promise.reject(ex);
    }
}