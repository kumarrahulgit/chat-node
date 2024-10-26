import app from "./app.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log("Server is running...")
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