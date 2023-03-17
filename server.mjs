import express from "express";
import cors from "cors";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "Hello World" }));

// error handle
app.use( (req, res) => {
  res.status(404).json({ msg: "ページが存在しません。" });
});
app.use( (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ msg: "不正なエラーが発生しました。" });
});

app.listen(port, () => console.log(`App started: http://localhost:${port}`));
