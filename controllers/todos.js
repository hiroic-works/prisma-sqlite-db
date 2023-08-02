import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// TODO 一覧取得
export const getTodos = async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.status(200).json(todos);
};

// TODO 1件取得
export const getTodo = async (req, res) => {
  // idパラメータ取得
  const { id } = req.params;

  // IDと紐づいたTODO1件を取得
  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!todo) {
    res.status(400);
    throw new Error("Bad Request: Todoがありません");
  }

  res.status(200).json(todo);
};

// TODO 登録
export const createTodo = async (req, res) => {
  // 送信されてきたデータ
  const { text } = req.body;

  if (!text) {
    res.status(400);
    throw new Error("Bad Request: リクエストに「text」は必須です");
  }

  try {
    // 登録
    const todo = await prisma.todo.create({
      data: {
        text,
      },
    });
    res.status(201).json({ msg: "Todo created!" });
  } catch (error) {
    console.error(error);
    // await prisma.$disconnect();
    // process.exit(1);
    next(error);
  }
};

// TODO 更新
export const updateTodo = async (req, res) => {
  // idパラメータ取得
  const { id } = req.params;

  const { text, isDone } = req.body;

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!todo) {
    res.status(400);
    throw new Error("Bad Request: Todoがありません");
  }

  try {
    const todo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        text,
        isDone,
      },
    });
    res.status(200).json({ msg: "Todo updated!" });
  } catch (error) {
    console.error(error);
    // await prisma.$disconnect();
    // process.exit(1);
    next(error);
  }
};

// TODO削除 DELETE
export const deleteTodo = async (req, res) => {
  // idパラメータ取得
  const { id } = req.params;

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!todo) {
    res.status(400);
    throw new Error("Bad Request: Todoがありません");
  }

  try {
    const todo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: "Todo deleted!" });
  } catch (error) {
    console.error(error);
    // await prisma.$disconnect();
    // process.exit(1);
    next(error);
  }
};
