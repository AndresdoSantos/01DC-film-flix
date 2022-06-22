import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // O "take" ordena pelo primeiro na tabela, não o primeiro registro
  const course = await prisma.courses.findFirst({
    take: 1,
  });

  console.log(course);
}

main();
