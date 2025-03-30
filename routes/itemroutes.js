const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemcontroler');

router.get('/', itemController.getItems);
router.post('/add', itemController.addItem);
router.post('/delete/:id', itemController.deleteItem);

module.exports = router;