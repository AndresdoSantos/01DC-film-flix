import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de NodeJS',
      duration: 500,
      description: 'Curso de Java muito bom',
      teacher: {
        connectOrCreate: {
          where: {
            id: 'b3099c66-8cab-4f20-9776-1b3f012b4278',
          },
          create: {
            name: 'Dani',
          },
        },
      },
    },
  });

  console.log(result);
}

main();
