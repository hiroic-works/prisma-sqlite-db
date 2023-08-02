import express from "express";
import {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.js";

const router = express.Router();

// 一覧取得
router.get("/", getTodos);

// TODO保存 CREATE
router.post("/", createTodo);

// TODO取得 READ
router.get("/:id", getTodo);

// TODO削除 DELETE
router.delete("/:id", deleteTodo);

// TODO更新 UPDATE
// putの場合はデータがあれば完全な上書きをしてデータがなければ新規作成する
router.put("/:id", updateTodo);

// TODO更新 UPDATE
// patchの場合はデータがすでに存在しているものに対して部分的に上書きをする。
// router.patch( '/:id', updateTodo )

export default router;
