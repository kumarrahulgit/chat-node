import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

export function createJWT(id, role) {
    const payload = {
        id,
        role
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
    });
};

export function verifyUser(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
            try {
                if (err) {
                    return res.status(401).json({ error: 'User unauthorized!' });
                }

                if (decoded) {
                    const user = await User.findById(decoded.id);
                    if (!user) {
                        return res.status(403).json({ error: 'User not found!' });
                    }

                    req.user = {
                        id: decoded.id,
                        role: decoded.role
                    }

                    return next();
                }
            } catch (e) {
                console.log(e)
                return res.status(500).json({ error: 'Something bad happened!' });
            }
        });
    } else {
        return res.status(401).json({ error: 'User unauthorized!' });
    }
};
