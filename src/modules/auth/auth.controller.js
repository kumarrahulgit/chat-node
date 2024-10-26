import httpStatus from "../../utils/httpStatus.js";

export async function testEndpoint(_, res) {
    try {
        return res.status(httpStatus.SUCCESS).json({
            message: 'User route'
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function adminTestEndpoint(_, res) {
    try {
        return res.status(httpStatus.SUCCESS).json({
            message: 'Admin route'
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}

export async function createUser(req, res) {
    try {

        //TODO: Create user

        return res.status(httpStatus.SUCCESS).json({
            message: "User created"
        });
    } catch (e) {
        console.log(e)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server Error!' });
    }
}
