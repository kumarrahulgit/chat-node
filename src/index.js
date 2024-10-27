import app from "./app.js";
import mongoDB from "./config/db.js";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, async () => {
    try {
        console.log("Server is running...");

        await mongoDB.init();

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

const unexpectedErrorHandler = (err) => {
    console.log(err)
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    if (server) {
        server.close();
    }
});