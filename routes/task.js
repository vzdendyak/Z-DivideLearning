const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.js') ;

router.get('/learning',controller.getLearning);
router.get('/learning/:id',controller.getLearningByNumber);
router.get('/practice',controller.getPractice);
router.get('/exam',controller.getExam);
router.post('/',controller.validateAnswers);

module.exports = router;
