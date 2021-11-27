import express from "express";
import Flight from '../model/flight.js'
const router = express.Router();

router.route('/createFlight').post((req, res) => {
    console.log(req.body,"what is the problem");
    const flightNumber = Number(req.body.flightNumber);
    const from = req.body.from;
    const to = req.body.to;
    const departureDate = Date(req.body.departureDate);
    const arrivalDate = Date(req.body.arrivalDate);
    const numOfEconomySeatsAvailable = Number(req.body.numOfEconomySeatsAvailable);
    const numOfBusinessSeatsAvailable = Number(req.body.numOfBusinessSeatsAvailable);
    const numOfFirstClassSeatsAvailable = Number(req.body.numOfFirstClassSeatsAvailable);
    Flight.insertMany({
        flightNumber: flightNumber,
        from: from,
        to: to,
        departureDate: departureDate,
        arrivalDate: arrivalDate,
        numOfEconomySeatsAvailable: numOfEconomySeatsAvailable,
        numOfBusinessSeatsAvailable: numOfBusinessSeatsAvailable,
        numOfFirstClassSeatsAvailable: numOfFirstClassSeatsAvailable,
    })



})


router.route('/deleteFlight').post((req, res) => {
    const flightNumber = req.body.flightNumber;
    console.log("are we here backend?", req.body);
    Flight.findOneAndDelete(
        { flightNumber: flightNumber }
    ).then(res => console.log(res))


})

router.route('/searchFlight').post((req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const arrivalDate = Date(req.body.arrivalDate);
    const deprtureDate = Date(req.body.deaprtureDate);
    const flightNumber = Number(req.body.flightNumber);
    console.log("are we here backend?", from, to, arrivalDate, deprtureDate, flightNumber);
    Flight.find({
        from: from,
        to: to,
        // arrivalDate: arrivalDate,
        // deprtureDate: deprtureDate,
        flightNumber: flightNumber,
    }).then(flights => res.json(flights))


})

router.route('/updateFlight').post((req, res) => {
    const oldFlightNumber = Number(req.body.oldFlightNumber);
    const flightNumber = Number(req.body.flightNumber);
    const arrivalDate = Date(req.body.arrivalDate);
    const deaprtureDate = Date(req.body.deaprtureDate);
    const numOfEconomySeatsAvailable = Number(req.body.numOfEconomySeatsAvailable);
    const numOfBusinessSeatsAvailable = Number(req.body.numOfBusinessSeatsAvailable);
    const numOfFirstClassSeatsAvailable = Number(req.body.numOfFirstClassSeatsAvailable);
    console.log("are we here backend?", oldFlightNumber, flightNumber, arrivalDate, deaprtureDate, numOfEconomySeatsAvailable, numOfBusinessSeatsAvailable, numOfFirstClassSeatsAvailable);
    Flight.findOneAndUpdate({ flightNumber: oldFlightNumber }, {
        flightNumber: flightNumber,
        arrivalDate: arrivalDate,
        deaprtureDate: deaprtureDate,
        numOfEconomySeatsAvailable: numOfEconomySeatsAvailable,
        numOfBusinessSeatsAvailable: numOfBusinessSeatsAvailable,
        numOfFirstClassSeatsAvailable: numOfFirstClassSeatsAvailable
    }).then(ress => console.log(res.body))


})
router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})

export default router;