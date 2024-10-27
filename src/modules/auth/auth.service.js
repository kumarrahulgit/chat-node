import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
import httpStatus from "../../utils/httpStatus.js";

export async function loginService(loginData) {
    const { username, password } = loginData;

    const user = await User.findOne({ email: username });
    const match = await bcrypt.compare(password, user.password);

    if (match) {
        const payload = {
            id: user._id,
            role: user.role
        };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION
        });

        user.refreshToken = refreshToken;

        await user.save();

        return {
            accessToken,
            refreshToken
        }
    }

    return {
        message: "Invalid username or password",
        data: {}
    }
}

export async function getRefreshTokenService(refreshToken) {
    const user = await User.findOne({ refreshToken });

    if (!user) {
        return null;
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err, user._id !== decoded.id) {
            return {
                status: httpStatus.FORBIDDEN,
                message: "Forbidden",
                data: {}
            };
        }

        const payload = {
            id: user._id,
            role: user.role
        };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION });

        return {
            accessToken
        }
    });

    return {
        message: "Invalid username or password",
        data: {}
    }
}

export async function logoutService(refreshToken) {
    const user = await User.findOne({ refreshToken });

    if (!user) {
        return null;
    }

    user.refreshToken = null;

    await user.save();

    return {
        status: httpStatus.NO_CONTENT,
        message: "Logged out",
        data: {}
    }
}