const express = require('express');
const router = express.Router();

const entitiesController = require('../controllers/entities.controller');

router.get('/', entitiesController.getAllEntities);
router.post('/', entitiesController.createEntity);

module.exports = router;
