function roleGuard(allowedRoles) {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: 'User does not have required privileges' });
        }

        return next();
    }
}

export default roleGuard;
