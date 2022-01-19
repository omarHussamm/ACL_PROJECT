import Counter from '../model/counter.js'
import express from "express";
import Booking from '../model/bookings.js';
const router = express.Router();

function getNextSequenceValue() {
    var sequenceDocument = Counter.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
       $inc: { sequence: 1 } ,
    }).then(res => {
      return res.sequence;
    });
}

router.route('/booking').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});
router.route('/editProfile').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});

router.route('/reservations').get((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});


router.route('/editReservation').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  res.send({
      reservation: {
          depFlightNumber: 1
          ,
          arrFlightNumber: 2
          ,
          Price: 55,
          arrEconomySeats: ['11F', '11E']
          ,
          arrBusinessSeats: ['7F']
          ,
          arrFirstClassSeats: []
          ,
          depEconomySeats: ['11F', '11E']
          ,
          depBusinessSeats: ['7F']
          ,
          depFirstClassSeats: []
      },
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
          EconomySeatsAvailable: ["34A", "34B", "34C", "30D", "30E"],
          BusinessSeatsAvailable: ["07F", "07E", "08C", "22D"],
          FirstClassSeatsAvailable: ["01A", "01E", "03B"]
      },
      arrivalFlight: {
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
          EconomySeatsAvailable: ["32A", "34B", "32C", "30D", "30E"],
          BusinessSeatsAvailable: ["09F", "23E", "08C", "22D"],
          FirstClassSeatsAvailable: ["02A", "01B", "03F"]
      }
  })
});

router.route('/changeSeat').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
});

router.route('/changeFlightNumber').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  res.send({flight:
    {
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
      EconomySeatsAvailable: ["32A", "34B", "32C", "30D", "30E"],
      BusinessSeatsAvailable: ["09F", "23E", "08C", "22D"],
      FirstClassSeatsAvailable: ["02A", "01B", "03F"]
  }
  })
});


router.route('/changeFlightSeats').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  res.send();
});

router.route('/cancelReservation').post((req, res) => {
  const reservationNumber = (Number(req.body.reservationNumber));
  console.log(Number(reservationNumber))
  //search if the current user has this reservation number if yes remove it
  Booking.findOneAndDelete({reservationNumber:reservationNumber}).then(ress => {
          console.log("cancelled flight", ress)})
      
  
})

export default router;