const path = require('path');

exports.getAllRooms = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', 'rooms.json'));
}
