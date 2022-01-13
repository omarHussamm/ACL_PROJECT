import express from "express";
import User from '../model/user.js'
//import cors from 'cors';
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import Flight from "../model/flight.js";
const router = express.Router();

env.config()

let bongEconomy = [
    "11A", "11B", "11C", "11D", "11E", "11F",
    "12A", "12B", "12C", "12D", "12E", "12F",
    "15A", "15B", "15C", "15D", "15E", "15F",
    "24A", "24B", "24C", "24D", "24E", "24F",
    "25A", "25B", "25C", "25D", "25E", "25F",
    "26A", "26B", "26C", "26D", "26E", "26F",
    "27A", "27B", "27C", "27D", "27E", "27F",
    "28A", "28B", "28C", "28D", "28E", "28F",
    "29A", "29B", "29C", "29D", "29E", "29F",
    "30A", "30B", "30C", "30D", "30E", "30F",
    "31A", "31B", "31C", "31D", "31E", "31F",
    "32A", "32B", "32C", "32D", "32E", "32F",
    "34A", "34B", "34C", "34D", "34E", "34F",
]
let bongBusiness = [
    "07A", "07B", "07C", "07D", "07E", "07F",
    "08A", "08B", "08C", "08D", "08E", "08F",
    "09A", "09B", "09C", "09D", "09E", "09F",
    "21A", "21B", "21C", "21D", "21E", "21F",
    "22A", "22B", "22C", "22D", "22E", "22F",
    "23A", "23B", "23C", "23D", "23E", "23F",
]
let bongFirst = [
    "01A", "01B", "01E", "01F",
    "02A", "02B", "02E", "02F",
    "03A", "03B", "03E", "03F",
]

router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
})

router.route('/login').post((req, res) => {
    console.log("did we get here", req.body);

    const userName = req.body.userName;
    const password = req.body.password;
    console.log("did we get here 2", req.body);

    const ACCESS_TOKEN_SECRET = 'omar'

    const REFRESH_TOKEN_SECRET = 'hossam'

    const accesstoken = jwt.sign(req.body.userName, ACCESS_TOKEN_SECRET)
    const refreshToken = jwt.sign(req.body.userName, REFRESH_TOKEN_SECRET)
    // refreshTokens.push(refreshToken)
    console.log("????", accesstoken, refreshToken);
    // res.json({ accessToken: accesstoken, refreshToken: refreshToken })
    User.find({ userName: userName, password: password })
        .then(users => {
            if (users[0]) {
                console.log("success");
                res.send({
                    loggedIN: "success",
                    type: users[0].type,
                    userToken: accesstoken
                });
            } else {
                console.log("fail");
                res.send({ loggedIN: "fail" });
            }
        });

})


// router.route('/login').post((req, res) => {
//     console.log("did we get here", req.body);

//     const password = req.body.password;
//     const userName = req.body.userName;

//     const accesstoken = jwt.sign(user, proccess.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKRN_SECRET)
//     refreshTokens.push(refreshToken)
//     console.log("????",accesstoken,refreshToken,refreshTokens);
//     res.json({ accessToken: accessToken, refreshToken: refreshToken })

//     User.find({ userName: userName, password: password })
//         .then(users => {
//             if (users[0]) {
//                 console.log("success");
//                 res.send("success");
//             } else {
//                 console.log("fail");
//                 res.send("fail");
//             }
//         });

// })
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(403)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

router.route('/updateFlight').post((req, res) => {
    let updateCriteria = {};
    const oldFlightNumber = Number(req.body.oldFlightNumber);
    console.log("test update");
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
        res.send("success")
    });
})

router.route('/createFlight').post((req, res) => {
    console.log(req.body)
    const flightNumber = Number(req.body.flightNumber);
    const from = req.body.from;
    const to = req.body.to;
    const departureDate = Date.parse(req.body.departureDate);
    const arrivalDate = Date.parse(req.body.arrivalDate);
    const model = req.body.model;
    const basePrice = Number(req.body.basePrice)
    let economySeatsAvailable = []
    let businessSeatsAvailable = []
    let firstClassSeatsAvailable = []
    if (model === "BongBoeing") {
        economySeatsAvailable = bongEconomy
        businessSeatsAvailable = bongBusiness
        firstClassSeatsAvailable = bongFirst
    }
    Flight.insertMany({
        flightNumber: flightNumber,
        from: from,
        to: to,
        departureDate: departureDate,
        arrivalDate: arrivalDate,
        model: model,
        economySeatsAvailable: economySeatsAvailable,
        businessSeatsAvailable: businessSeatsAvailable,
        firstClassSeatsAvailable: firstClassSeatsAvailable,
        numofEconomySeatsAvailable: economySeatsAvailable.length,
        numofBusinessSeatsAvailable: businessSeatsAvailable.length,
        numofFirstClassSeatsAvailable: firstClassSeatsAvailable.length,
        basePrice: basePrice
    })

})

router.route('/searchbyFlightNumber').post((req, res) => {
    Flight.findOne(req.body).then(flight=>{
        res.send(flight);
    })

});

router.route('/deleteFlight').post((req, res) => {
    const flightNumber = req.body.flightNumber;
    Flight.findOneAndDelete(
        { flightNumber: flightNumber }
    ).then(ress => {
        console.log("deleted flight", ress);
        res.send("");
    });


})

export default router;