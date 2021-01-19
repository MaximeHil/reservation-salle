const express = require('express');

const router = express.Router();
const roomsCtrl = require('../controllers/rooms');

router.post('/reservation', roomsCtrl.bookRoom);
router.get('/name', roomsCtrl.getRoomsWithName);
router.get('/equipement', roomsCtrl.getRoomsWithEquipement);
router.get('/', roomsCtrl.getAllRooms);


module.exports = router;
