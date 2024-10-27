export default function validator(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            errors: {
                wrap: {
                    label: false
                }
            }
        });

        if (error) {
            return res.status(400).json({
                message: error.message,
                data: {}
            });
        }

        req.body = value;

        return next();
    }
}
