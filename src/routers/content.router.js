const express = require("express");
const router = express.Router();

const contentController = require("../controllers/content.controller");

router.get("/", contentController.getAllContent);
router.post("/", contentController.createContent);
// router.delete("/:id", contentController.deleteContent);
router.put("/:id", contentController.updateContent);

module.exports = router;
