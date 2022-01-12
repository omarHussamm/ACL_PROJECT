import express, { application } from "express";
import User from '../model/user.js'
import Flight from '../model/flight.js'
import bcrypt from 'bcrypt'
//import cors from 'cors';
import jwt from 'jsonwebtoken'
import env from 'dotenv'
const router = express.Router();

router.route('/signup').post(async (req, res) => {
    const FirstName = req.body.newUser.firstName;
    const LastName = req.body.newUser.lastName;
    const HomeAddress = req.body.newUser.homeAddress;
    const CounrtyCode = req.body.newUser.countryCode;
    const Email = req.body.newUser.email;
    const PassportNum = req.body.newUser.passport;
    const type = '1';
    const telephoneNumber = [].concat(req.body.newUser.telephoneNumber);
    const userName = req.body.newUser.userName;
    const hashedPassword = await bcrypt.hash(req.body.newUser.password, 10)
    var NewUser = { type: type, password: hashedPassword, firstName: FirstName, lastName: LastName, userName: userName, homeAddress: HomeAddress, countryCode: CounrtyCode, email: Email, telephoneNumber: telephoneNumber, Passportnumber: PassportNum };
    User.insertMany(NewUser, function (err, res) {
        if (err) throw err;
        console.log("1 user inserted");
    });

});


router.route('/search').post((req, res) => {
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

});

router.route('/selectDepFlight').post((req, res) => {
    //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////

    res.send({
        returnFlights: [
            {
                flightNumber: 1213,
                from: "sad",
                to: "happy",
                departureDate: "2021-12-24T01:34:00.000Z",
                arrivalDate: "2021-12-24T13:34:00.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0,
                basePrice: 10,
            },
        ],
        departureFlight: {
            flightNumber: 1211,
            from: "happy",
            to: "sad",
            departureDate: "2021-12-18T01:34:57.000Z",
            arrivalDate: "2021-12-18T01:34:57.000Z",
            numOfEconomySeatsAvailable: 12,
            numOfBusinessSeatsAvailable: 33,
            numOfFirstClassSeatsAvailable: 44,
            __v: 0,
            basePrice: 12,
        },
    })
});

router.route('/selectArrFlight').post((req, res) => {
    //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////

    res.send({
        flightNumber: 1213,
        from: "happy",
        to: "sad",
        departureDate: "2021-12-24T01:34:00.000Z",
        arrivalDate: "2021-12-24T13:34:00.000Z",
        numOfEconomySeatsAvailable: 12,
        numOfBusinessSeatsAvailable: 33,
        numOfFirstClassSeatsAvailable: 44,
        __v: 0,
        basePrice: 10,
    })
});




export default router;