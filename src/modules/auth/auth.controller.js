import httpStatus from "../../utils/httpStatus.js";
import { getRefreshTokenService, loginService, logoutService } from "./auth.service.js";

export async function login(req, res) {
    try {
        const response = await loginService(req.body);

        res.cookie("refreshToken", response.refreshToken, { httpOnly: true });

        return res.status(httpStatus.SUCCESS).json({
            message: "Logged in successfully",
            data: { token: response.accessToken }
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function getRefreshToken(req, res) {
    try {
        const cookies = req.cookies;

        if (!cookies.refreshToken) {
            return res.sendStatus(401);
        }

        const { refreshToken } = cookies;

        const response = await getRefreshTokenService(refreshToken);

        if (!response) {
            return res.sendStatus(403);
        }

        res.cookie("refreshToken", response.refreshToken, { httpOnly: true });

        return res.status(response.status).json({
            message: response.message,
            data: response.data
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function logout(req, res) {
    try {
        const cookies = req.cookies;

        if (!cookies.refreshToken) {
            return res.sendStatus(204);
        }

        const { refreshToken } = cookies;

        const response = await logoutService(refreshToken);

        if (!response) {
            res.clearCookie("refreshToken", { httpOnly: true });
            return res.sendStatus(204);
        }

        return res.status(response.status).json({
            message: response.message,
            data: response.data
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}
