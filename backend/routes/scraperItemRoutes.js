const express = require('express');
const { handleScrapeItemRequest } = require('../controllers/scraperItemsController');

const router = express.Router();

router.get('/scrape', handleScrapeItemRequest);

module.exports = router;