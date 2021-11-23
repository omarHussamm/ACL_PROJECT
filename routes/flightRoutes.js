import express from "express";
import Flight from '../model/flight.js'
const router = express.Router();

router.route('/').get((req, res) => {
    Flight.find().then(flights => res.json(flights))
})

export default router;