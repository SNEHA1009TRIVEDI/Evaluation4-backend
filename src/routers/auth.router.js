const express = require('express');
const router = express.Router();
const {validateCreateTask,validatePutTask,validateLogin,validateReq}=require('../middleware/validate.js');

router.post('/login',validateLogin);

module.exports = router;
