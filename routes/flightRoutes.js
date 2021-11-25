import express from "express";
import Flight from '../model/flight.js'
const router = express.Router();

router.route('/createFlight').post((req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const cabin = req.body.cabin;
    const date = Date(req.body.date);
    const numOfSeatsAvailable = Number(req.body.numOfSeatsAvailable);
    Flight.insertMany({ from: from, to: to, cabin: cabin, date: date, numOfSeatsAvailable: numOfSeatsAvailable })



})


router.route('/deleteFlight').post((req, res) => {
    const id = req.body.id;
    console.log("are we here backend?", req.body);
    Flight.findByIdAndDelete(id).then(res => console.log(res))


})

router.route('/searchFlight').post((req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const cabin = req.body.cabin;
    const date = Date(req.body.date);
    const numOfSeatsAvailable = Number(req.body.numOfSeatsAvailable);
    console.log("are we here backend?", from, to, cabin, date, numOfSeatsAvailable);
    Flight.find({ from: from, to: to, cabin: cabin}).then(flights => res.send(flights))


})

router.route('/updateFlight').post((req, res) => {
    const id = req.body.id;
    const from = req.body.from;
    const to = req.body.to;
    const cabin = req.body.cabin;
    const date = Date(req.body.date);
    const numOfSeatsAvailable = Number(req.body.numOfSeatsAvailable);
    console.log("are we here backend?", id,from, to, cabin, date, numOfSeatsAvailable);
    Flight.findByIdAndUpdate(id,{ from: from, to: to, cabin: cabin, date: date, numOfSeatsAvailable: numOfSeatsAvailable }).then(ress =>console.log(res))


})
router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})

export default router;