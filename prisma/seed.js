// 仮データの挿入

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const todo01 = await prisma.todo.create({
    data: {
      text: "test todo01",
      isDone: false,
    },
  });
  const todo02 = await prisma.todo.create({
    data: {
      text: "test todo02",
      isDone: true,
    },
  });
  const todo03 = await prisma.todo.create({
    data: {
      text: "test todo03",
      isDone: false,
    },
  });

  console.log({ todo01, todo02, todo03 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
