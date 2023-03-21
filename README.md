# prisma-sqlite-db

## 初回設定

`.env`を作成する。

```.env
PORT=8080

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
```

## 起動

サーバー: `npm start`

DB GUI: `npm run studio`

## Prisma参考

https://www.prisma.io/docs/getting-started/quickstart