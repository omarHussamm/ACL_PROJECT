import express from "express";
import Flight from '../model/flight.js'
const router = express.Router();

router.route('/createFlight').post((req, res) => {
    console.log(req.body, "what is the problem");
    const flightNumber = Number(req.body.flightNumber);
    const from = req.body.from;
    const to = req.body.to;
    const departureDate = Date.parse (req.body.departureDate) ;
    const arrivalDate = Date.parse(req.body.arrivalDate) ;
    const numOfEconomySeatsAvailable = Number(req.body.numOfEconomySeatsAvailable);
    const numOfBusinessSeatsAvailable = Number(req.body.numOfBusinessSeatsAvailable);
    const numOfFirstClassSeatsAvailable = Number(req.body.numOfFirstClassSeatsAvailable);
    Flight.insertMany({
        flightNumber: flightNumber,
        from: from,
        to: to,
        departureDate: departureDate ,
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
    let searchCriteria = {}
    if (req.body.from !== "") {
        console.log(req.body.from);
        searchCriteria = { ...searchCriteria, from: req.body.from }
    }
    if (req.body.to !== "") { searchCriteria = { ...searchCriteria, to: req.body.to } }
    if (req.body.arrivalDate !== "") { searchCriteria = { ...searchCriteria, arrivalDate: Date(req.body.arrivalDate) } }
    if (req.body.deaprtureDate !== "") { searchCriteria = { ...searchCriteria, deaprtureDate: Date(req.body.deaprtureDate) } }
    if (req.body.flightNumber !== "") { searchCriteria = { ...searchCriteria, flightNumber: Number(req.body.flightNumber) } }

    console.log("are we here backend?", searchCriteria);
    Flight.find(
        searchCriteria
    ).then(flights => res.json(flights))


})

router.route('/updateFlight').post((req, res) => {
    let updateCriteria = {};
    const oldFlightNumber = Number(req.body.oldFlightNumber);
    if (req.body.numOfBusinessSeatsAvailable !== "") { updateCriteria = { ...updateCriteria, from: Number(req.body.numOfBusinessSeatsAvailable) } }
    if (req.body.numOfEconomySeatsAvailable !== "") { updateCriteria = { ...updateCriteria, to: Number(req.body.numOfEconomySeatsAvailable) } }
    if (req.body.numOfFirstClassSeatsAvailable !== "") { updateCriteria = { ...updateCriteria, to: Number(req.body.numOfFirstClassSeatsAvailable) } }
    if (req.body.arrivalDate !== "") { updateCriteria = { ...updateCriteria, arrivalDate: Date(req.body.arrivalDate) } }
    if (req.body.deaprtureDate !== "") { updateCriteria = { ...updateCriteria, deaprtureDate: Date(req.body.deaprtureDate) } }
    if (req.body.flightNumber !== "") { updateCriteria = { ...updateCriteria, flightNumber: Number(req.body.flightNumber) } }

    Flight.findOneAndUpdate({ flightNumber: oldFlightNumber }, updateCriteria).then(ress => console.log(res.body))


})
router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})

export default router;