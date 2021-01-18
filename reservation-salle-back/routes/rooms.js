const express = require('express');

const router = express.Router();
const roomsCtrl = require('../controllers/rooms');

router.get('/', roomsCtrl.getAllRooms);

module.exports = router;
