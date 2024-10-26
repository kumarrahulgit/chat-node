import express from "express"
import cors from "cors";
import AppError from "./utils/error.js"
import httpStatus from "./utils/httpStatus.js"
import routes from "./routes/index.js"

const app = express();

app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/api", routes)

app.use((req, res, next) => {
    next(
        new AppError(
            "Not found",
            httpStatus.NOT_FOUND,
            "The endpoint for the request does not exist",
            true
        )
    )
});

export default app;
