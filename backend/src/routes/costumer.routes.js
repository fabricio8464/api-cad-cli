const express = require("express");
const router = express.Router();
const costumerController = require("../controllers/costumer.controller");

router.post("/create-costumer", costumerController.createCostumer);
router.get("/costumers", costumerController.readCostumers);
router.put("/update-costumer/:id", costumerController.updateCostumer);
router.delete("/delete-costumer/:id", costumerController.deleteCostumer);

module.exports = router;
