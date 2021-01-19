const path = require('path');
const Reservation = require('../models/reservation')
const fs = require('fs');

exports.getAllRooms = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, './', 'rooms.json'));
}

exports.getRoomsWithName = (req, res, next) => {
    let jsonRooms = JSON.parse(fs.readFileSync(`${__dirname}/rooms.json`, 'utf-8'));

    let filteredRooms = jsonRooms.rooms.filter(room => room.name.toLocaleLowerCase().includes(req.body.searchString.toLowerCase()));

    if(filteredRooms && filteredRooms.length > 0){
        res.status(200).json(filteredRooms);
    }else {
        res.status(200).json({message: "Aucune salle ne correspond"})
    }

}

exports.getRoomsWithEquipement = (req, res, next) => {

}

exports.bookRoom = (req, res, next) => {
    console.log(req.body);
    const reservationObject = req.body.reservation;
    delete reservationObject._id;
    const reservation = new Reservation({
        ...reservationObject
    });
    reservation.save()
        .then(() => res.status(201).json({ message: 'Réservation enregistrée !'}))
        .catch((error) => res.status(400).json({ error }));
}
