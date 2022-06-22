import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de Java',
      description: 'Curso de Java + Prisma',
    },
  });

  console.log(course);
}

main();
