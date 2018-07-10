const router = require('express').Router();
const photoController = require('../controllers/photoController');

router
  .get('/read', photoController.readAll)

module.exports = router;