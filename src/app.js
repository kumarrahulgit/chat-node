import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js"

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors())

app.use("/api", routes)

app.use((req, res) => {
    return res.status(404).json({ message: "Request not found" });
});

export default app;
