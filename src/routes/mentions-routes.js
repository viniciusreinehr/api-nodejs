const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const mentionsController = require('../controllers/mentions-controller');

const jsonParser = bodyParser.json();

router.get('/', mentionsController.listMentions);
router.post('/', jsonParser, mentionsController.createMention);

module.exports = router;