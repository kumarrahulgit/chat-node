import app from "./app.js";
import mongoDB from "./config/db.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    try {
        console.log("Server is running...");

        mongoDB.init();

        console.log("Connected to DB");
    } catch (ex) {
        console.log(ex);

        throw new Error("Error connecting to DB")
    }
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = () => {
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    if (server) {
        server.close();
    }
});