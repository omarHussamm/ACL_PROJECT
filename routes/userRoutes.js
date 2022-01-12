// import Counters from '../model/counters.js'
import express from "express";
import Booking from '../model/bookings.js';
const router = express.Router();

function getNextSequenceValue() {
    var sequenceDocument = Counters.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
       $inc: { sequence: 1 } ,
    }).then(res => {
      return res.sequence;
    });
}

router.route('/booking').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});

router.route('/cancelReservation').post((req, res) => {
  const reservationNumber = (Number(req.body.reservationNumber));
  console.log(Number(reservationNumber))
  //search if the current user has this reservation number if yes remove it
  Booking.findOneAndDelete({reservationNumber:reservationNumber}).then(ress => {
          console.log("cancelled flight", ress)})
      
  
})

export default router;