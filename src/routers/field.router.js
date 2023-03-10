const express = require("express");
const router = express.Router();

const fieldController = require("../controllers/field.controller");

router.get("/", fieldController.getAllFields);
router.post("/", fieldController.createField);
router.get("/:id", fieldController.getFieldById);
router.delete("/:id", fieldController.deleteFieldById);
module.exports = router;
