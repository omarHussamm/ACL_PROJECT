import express from "express";
import Flight from '../model/flight.js'
const router = express.Router();

router.route('/createFlight').post((req, res) => {
    const flightNumber = Number(req.body.flightNumber);
    const from = req.body.from;
    const to = req.body.to;
    const departureDate = Date.parse(req.body.departureDate);
    const arrivalDate = Date.parse(req.body.arrivalDate);
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
    Flight.findOneAndDelete(
        { flightNumber: flightNumber }
    ).then(ress => {
        console.log("deleted flight", ress);
    });


})

router.route('/searchFlight').post((req, res) => {
    let searchCriteria = {}
    if (req.body.from !== "") {
        searchCriteria = { ...searchCriteria, from: req.body.from }
    }
    if (req.body.to !== "") { searchCriteria = { ...searchCriteria, to: req.body.to } }
    if (req.body.arrivalDate !== "") { searchCriteria = { ...searchCriteria, arrivalDate: new Date(req.body.arrivalDate) } }
    if (req.body.departureDate !== "") { searchCriteria = { ...searchCriteria, departureDate: new Date(req.body.departureDate) } }
    if (req.body.flightNumber !== "") { searchCriteria = { ...searchCriteria, flightNumber: Number(req.body.flightNumber) } }

    Flight.find(
        searchCriteria
    ).then(flights => res.json(flights))


})

router.route('/updateFlight').post((req, res) => {
    let updateCriteria = {};
    const oldFlightNumber = Number(req.body.oldFlightNumber);
    console.log("test update");
    if (req.body.numOfBusinessSeatsAvailable !== "") { updateCriteria = { ...updateCriteria, numOfBusinessSeatsAvailable: Number(req.body.numOfBusinessSeatsAvailable) } }
    if (req.body.numOfEconomySeatsAvailable !== "") { updateCriteria = { ...updateCriteria, numOfEconomySeatsAvailable: Number(req.body.numOfEconomySeatsAvailable) } }
    if (req.body.numOfFirstClassSeatsAvailable !== "") { updateCriteria = { ...updateCriteria, numOfFirstClassSeatsAvailable: Number(req.body.numOfFirstClassSeatsAvailable) } }
    if (req.body.arrivalDate !== "") {
        updateCriteria = {
            ...updateCriteria, arrivalDate: new Date(req.body.arrivalDate)
        }
        console.log("updated arrival Date", new Date(req.body.arrivalDate));
    }
    if (req.body.departureDate !== "") {
        updateCriteria = { ...updateCriteria, departureDate: new Date(req.body.departureDate) }
        console.log("updated departure Date", new Date(req.body.departureDate));
    }
    if (req.body.flightNumber !== "") { updateCriteria = { ...updateCriteria, flightNumber: Number(req.body.flightNumber) } }

    Flight.findOneAndUpdate({ flightNumber: oldFlightNumber }, updateCriteria).then(ress => {
        console.log("updated flight", ress);
    });


})
router.route('/searchFlights2').post((req, res) => {
    let searchCriteria = {}
    if (req.body.from !== "") {
        searchCriteria = { ...searchCriteria, from: req.body.from }
    }
    if (req.body.to !== "") { searchCriteria = { ...searchCriteria, to: req.body.to } }
    if (req.body.arrivalDate !== "") { searchCriteria = { ...searchCriteria, arrivalDate: new Date(req.body.arrivalDate) } }
    if (req.body.departureDate !== "") { searchCriteria = { ...searchCriteria, departureDate: new Date(req.body.departureDate) } }
    // if (req.body.flightNumber !== "") { searchCriteria = { ...searchCriteria, flightNumber: Number(req.body.flightNumber) } }
    if (req.body.numOfBusinessSeatsAvailable !== "") { searchCriteria = { ...searchCriteria, numOfBusinessSeatsAvailable: { $gte: req.body.numOfBusinessSeatsAvailable } } }
    if (req.body.numOfEconomySeatsAvailable !== "") { searchCriteria = { ...searchCriteria, numOfEconomySeatsAvailable: { $gte: req.body.numOfEconomySeatsAvailable } } }
    if (req.body.numOfFirstClassSeatsAvailable !== "") { searchCriteria = { ...searchCriteria, numOfFirstClassSeatsAvailable: { $gte: req.body.numOfFirstClassSeatsAvailable } } }

    Flight.find(
        searchCriteria
    ).then(flights => res.json(flights))
    // numOfEconomySeatsAvailable : {$gte : req.body.numOfEconomySeatsAvailable},
    //     numOfBusinessSeatsAvailable : {$gte : req.body.numOfBusinessSeatsAvailable},

})
router.route('/selectDepFlight').post((req, res) => {
    let searchCriteria = {}
    let depFrom = ""
    let depTo = ""
    let depFlight = ""
    let x = ""
    if (req.body.flightNumber !== "") { searchCriteria = { ...searchCriteria, flightNumber: Number(req.body.flightNumber) } }
    Flight.find(
        searchCriteria
    ).then(flights => {
        depFlight = flights[0]
        depFrom = flights[0].from
        depTo = flights[0].to
        Flight.find(
            {
                from: depTo,
                to: depFrom
            }
        ).then(flights => {
            x = flights
            res.json(
                {
                    returnFlights: flights,
                    departureFlight: depFlight

                })
        }
        )
    console.log('hi')
    console.log(flights)
    console.log('hiii0')
    console.log(x)
})
        
})
router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})


export default router;