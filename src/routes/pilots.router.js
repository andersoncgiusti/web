const express = require('express');
const router = express.Router();

const pilotsController = require('../controllers/pilots.controller');

router.post('/api/pilots', pilotsController.pilotsPostUrl);
router.get('/api/pilots', pilotsController.pilotsGetUrl);
router.get('/api/pilots_status', pilotsController.pilots_status);

module.exports = router;