const prisma = require("../prisma/client");

async function createCostumer(data) {
  return await prisma.costumers.create({
    data: {
      data,
    },
  });
}

async function readCostumers() {
  return prisma.costumers.findMany();
}

async function updateCostumer(id, data) {
  return await prisma.costumers.update({
    where: {
      id: id,
    },
    data: {
      data,
    },
  });
}

async function deleteCostumer(id) {
  return await prisma.costumers.delete({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createCostumer,
  readCostumers,
  updateCostumer,
  deleteCostumer,
};
