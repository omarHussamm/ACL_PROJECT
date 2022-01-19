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
  let updateCriteria = {};
  jwt.verify(req.body.userToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => { 
    const user22=user;
    User.find({userName: user22}).then(user=>{
      if(req.body.firstName!==null){updateCriteria = { ...updateCriteria, firstName: req.body.firstName} }
      if(req.body.lastName!==null){updateCriteria = { ...updateCriteria, lastName: req.body.lastName} }
      if(req.body.passport!==null){updateCriteria = { ...updateCriteria, passport: req.body.passport} }
      if(user.email!==null){updateCriteria = { ...updateCriteria, email: req.body.email} }

      User.findByIdAndUpdate(user[0]._id,updateCriteria).then(ress => {
        console.log("updated profile", ress);
    });
    })
  })
});

router.route('/reservations').get((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});


router.route('/create-checkout-session').get( async (req, res) => {
  console.log("DAkhalt el method")
  const amount = parseInt(req.body.amount)
  console.log("Amount is ")
  console.log(amount)
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Flights',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success.html',
    cancel_url: 'http://localhost:3000/cancel.html',
  });
  console.log("redirecting to url")
  console.log(session.url);
  res.redirect(303, session.url);
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
  Booking.findOne({reservationNumber: Number(reservationNumber)}).then(ress =>{ 
    console.log('dfssdfd', req.body.userToken)
    console.log(ress)
   console.log('bbb',ress.userID)
  if(req.body.userToken==ress.userID){
  Booking.findOneAndDelete({reservationNumber:reservationNumber}).then(ress => {
          console.log("cancelled flight", ress)})
  }else{
    console.log("cannot cancel this reservation because it belongs to another user")
  }
})
})

router.route('/changePassword').post((req,res)=>{
  jwt.verify(req.body.userToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => { 
    const user22=user;
    User.find({userName: user22}).then(user=>{
      if(user[0].password===req.body.oldPassword){
         User.findByIdAndUpdate(user[0]._id,{password:req.body.newPassword}).then(res=>{
           console.log("res",res);
         });
      }
      else{
        //raga3 error 3ala el front end
        console.log("8alat");
      }
    })
  
});
 })


export default router;