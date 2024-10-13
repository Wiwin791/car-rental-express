const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ROLE = [
  {
    id: 1,
    role: "SUPERADMIN",
    createdBy: "Super Duper Admin"
  },
  {
    id: 2,
    role: "ADMIN",
    createdBy: "Super Duper Admin"
  },
  {
    id: 3,
    role: "USER",
    createdBy: "Super Duper Admin"
  },
];

async function roleSeed() {
  await prisma.role.deleteMany();
  await prisma.role.createMany({
    data: ROLE,
  });
}

module.exports = roleSeed;