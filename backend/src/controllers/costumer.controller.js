const costumerService = require("../services/costumer.service");

async function createCostumer(req, res, next) {
  try {
    const costumer = await costumerService.createCostumer(req.body);
    res.status(201).json(costumer);
  } catch (err) {
    next(err);
  }
}

async function readCostumers(req, res, next) {
  try {
    const costumer = await costumerService.readCostumers();
    res.status(200).json(costumer);
  } catch (err) {
    next(err);
  }
}

async function updateCostumer(req, res, next) {
  try {
    const costumer = await costumerService.updateCostumer(
      req.params.id,
      req.body
    );
    res.status(201).json(costumer);
  } catch (err) {
    next(err);
  }
}

async function deleteCostumer(req, res, next) {
  try {
    const costumer = await costumerService.deleteCostumer(req.params.id);
    res.status(200).json(costumer);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createCostumer,
  readCostumers,
  updateCostumer,
  deleteCostumer,
};
