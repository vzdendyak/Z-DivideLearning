const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.js') ;

router.get('/',controller.getAll);
router.get('/:id',controller.getById);
router.post('/',controller.validateAnswers);

module.exports = router;
