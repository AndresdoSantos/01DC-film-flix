import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.update({
    where: {
      id: '361146f6-8b58-4a95-8c88-6cd8a35a3736',
    },
    data: {
      name: 'Curso de Lua',
    },
  });
}

main();
