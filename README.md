# prisma-sqlite-db

## TODO API

一覧取得[GET]: `/api/todos`

1 件取得[GET]: `/api/todos/:id`

新規登録[POST]: `/api/todos`

1 件更新[PUT]: `/api/todos/:id`

1 件削除[DELETE]: `/api/todos/:id`

## 初回設定

`.env`を作成する。

```.env
NODE_ENV="development" # "development" or "production"
PORT=5000

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
```

## 起動

サーバー起動: `pnpm start`

DB GUI 起動: `pnpm studio`

## 操作

seed データの追加: `pnpm seed`

prisma migrate: `pnpm migrate`

## CRUD

VS Code の拡張機能「REST Client」を使用。

https://marketplace.visualstudio.com/items?itemName=humao.rest-client

## Prisma 参考

https://www.prisma.io/docs/getting-started/quickstart
