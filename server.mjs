import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 8080;

const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "Hello World" }));

app.get("/api/users", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get("/api/users/:id", async (req, res, next) => {
  const { id } = req.params;
  const _id = parseInt(id);

  const user = await prisma.user.findUnique({
    where: {
      id: _id,
    },
  });

  if (!user) return res.status(400).json({ msg: "存在しないユーザーです" });

  res.json(user);
});

app.post("/api/users", async (req, res, next) => {
  const { name, email } = req.body;

  // TODO: request check

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        // posts: {
        //   create: {
        //     title: "Hello World",
        //     content: "test content",
        //   },
        // },
      },
    });
    res.status(201).json({ msg: "User created!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.patch("/api/users/:id", async (req, res, next) => {
  const { id } = req.params;
  const _id = parseInt(id);
  const { name } = req.body;

  // user check
  const user = await prisma.user.findUnique({
    where: {
      id: _id,
    },
  });
  if (!user) return res.status(400).json({ msg: "存在しないユーザーです" });

  try {
    const user = await prisma.user.update({
      where: {
        id: _id,
      },
      data: {
        name,
      },
    });
    res.json({ msg: "User updated!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.delete("/api/users/:id", async (req, res, next) => {
  const { id } = req.params;
  const _id = parseInt(id);

  // user check
  const user = await prisma.user.findUnique({
    where: {
      id: _id,
    },
  });
  if (!user) return res.status(400).json({ msg: "存在しないユーザーです" });

  try {
    const user = await prisma.user.delete({
      where: {
        id: _id,
      },
    });
    res.json({ msg: "User deleted!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// error handle
app.use((req, res) => {
  res.status(404).json({ msg: "ページが存在しません。" });
});
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ msg: "不正なエラーが発生しました。" });
});

app.listen(port, () => console.log(`App started: http://localhost:${port}`));
