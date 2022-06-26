import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso exclente de React Native',
      duration: 300,
      teacher: {
        connect: {
          id: 'a491e560-9c09-4488-a6a4-3db82d3a0c37',
        },
      },
    },
  });

  console.log(result);
}

main();
