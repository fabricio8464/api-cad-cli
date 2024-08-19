import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const costumers = await prisma.costumers.findMany();
  res.status(200).json(costumers);
});

app.post("/create-costumer", async (req, res) => {
  try {
    const createCostumer = await prisma.costumers.create({
      data: {
        email: req.body.email,
        company_name: req.body.company_name,
        requested_service: req.body.requested_service,
      },
    });
    return res.status(201).json(req.body);
  } catch (e) {
    if (e.code === "P2002")
      return res.status(500).send({
        erro: e,
        message:
          "There is a unique constraint violation, a new costumer cannot be created with this email",
      });
  }
});

app.put("/update-costumer/:id", async (req, res) => {
  try {
    const createCostumer = await prisma.costumers.update(
      {
        where: {
          id: req.params.id,
        },
        data: {
          email: req.body.email,
          company_name: req.body.company_name,
          requested_service: req.body.requested_service,
        },
      },
      true
    );
    return res.status(201).json(req.body);
  } catch (e) {
    return res.status(500).send({
      error: e,
      message: "Error cannot conect to the service!",
    });
  }
});

app.delete("/delete-costumer/:id", async (req, res) => {
  try {
    const deleteCostumers = await prisma.costumers.delete(
      {
        where: {
          id: req.params.id,
        },
      },
      true
    );
    return res
      .status(200)
      .send({
        costumer: deleteCostumers,
        message: "Usuario removido com sucesso!",
      });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log("App is running");
});
