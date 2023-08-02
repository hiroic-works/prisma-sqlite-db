import express from "express";
import cors from "cors";
import env from "dotenv";
env.config();

import todoRouters from "./routes/todos.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();
const port = process.env.PORT || 5000;

// cors
const origins =
  process.env.NODE_ENV === "development"
    ? ["http://localhost:3000"]
    : ["http://exsample.com"];
app.use(
  cors({
    origin: origins, //アクセス許可するオリジン
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => res.send("index"));

app.use("/api/todos", todoRouters);

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`App started: http://localhost:${port}`));
