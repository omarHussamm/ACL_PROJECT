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
        depDate = Date(flights[0].departureDate)
        Flight.find(
            {
                from: depTo,
                to: depFrom,
                departureDate: {$gte: ISODate(depDate)}
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
router.route('/viewreservation').post((req, res) => {
    console.log(req.body.userToken)
    Booking.find({userID:req.body.userToken}).then(bookings =>{ 
        console.log(bookings)
        res.send(bookings)
    })
})

router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})


export default router;