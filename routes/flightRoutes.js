import express from "express";
import Flight from '../model/flight.js';
import Booking from '../model/bookings.js';
const router = express.Router();






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
router.route('/viewreservation').get((req, res) => {
    let searchCriteria = {}
    //search with username from token
    searchCriteria = {};
    Booking.find(searchCriteria).then(bookings => res.json(bookings))
})

router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})


export default router;