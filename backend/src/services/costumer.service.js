const prisma = require("../prisma/client");

async function createCostumer(data) {
  return await prisma.costumers.create({
    data: {
      email: data.email,
      company_name: data.company_name,
      requested_service: data.requested_service,
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
      email: data.email,
      company_name: data.company_name,
      requested_service: data.requested_service,
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
