import Counter from '../model/counter.js'
import express from "express";
import Booking from '../model/bookings.js';
import Flight from '../model/flight.js'
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken'
import User from '../model/user.js'
const router = express.Router();
const stripe = new Stripe('sk_test_51KIdQrEaymOcSPsURTB8EkjKGLLiKWzNcEHLz3yCDH1283tyTDzcpjmzlh90kI693jVTRdB12f6qDYbHCtaAStpq00Hddmz4jF');


function getNextSequenceValue() {
  var sequenceDocument = Counter.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
      $inc: { sequence: 1 },
    }).then(res => {
      return res.sequence;
    });
}

router.route('/booking').post((req, res) => {
  var sequenceDocument = Counter.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
      $inc: { sequence: 1 },
    }).then(ressss => {
      sequenceDocument = ressss.sequence;

      const insertBooking = {
        reservationNumber: sequenceDocument,
        depFlightNumber:parseInt(req.body.depFlightNumber),
        arrFlightNumber:parseInt(req.body.arrFlightNumber),
        userID:req.body.userID,
        Price:req.body.price,
        arrEconomySeats:(req.body.arrEconomySeats),
        arrBusinessSeats:(req.body.arrBusinessSeats),
        arrFirstClassSeats:(req.body.arrFirstClassSeats),
        depEconomySeats:(req.body.depEconomySeats),
        depFirstClassSeats:(req.body.depFirstClassSeats),
        depBusinessSeats:(req.body.depBusinessSeats)
      }
      Booking.insertMany(insertBooking);
      var transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
          user:'ershacl123@gmail.com',
          pass:'ershacl0'
        }
      });
      
    jwt.verify(req.body.userID, process.env.ACCESS_TOKEN_SECRET, async (err, user) => { 
      const user22=user;
      User.find({userName:user22}).then(user=>{
        console.log(user)
      var mailOptions ={
      from:'ershacl123@gmail.com',
      to:user[0].email,
      subject:'Flight Itinerary',
      text:`Reservation Number:${sequenceDocument} , Departure Flight Number: ${req.body.depFlightNumber} , Arrival Flight Number:${req.body.arrFlightNumber} , Price:${req.body.price} ,`
    };
    transport.sendMail(mailOptions,function(error,info){
      if(error){
        console.log(error);
      }
      else{
        console.log('email is sent'+info.res)
      }
    });
      })
    })
    })
  })
router.route('/editProfile').post((req, res) => {
  let updateCriteria = {};
  console.log(req.body);
  jwt.verify(req.body.userToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => { 
    const user22=user;
    User.find({userName: user22}).then(user=>{
      if(req.body.firstName!==''){updateCriteria = { ...updateCriteria, firstName: req.body.firstName} }
      if(req.body.lastName!==null){updateCriteria = { ...updateCriteria, lastName: req.body.lastName} }
      if(req.body.passport!==null){updateCriteria = { ...updateCriteria, passport: req.body.passport} }
      if(req.body.number!==null){updateCriteria = { ...updateCriteria, passport: req.body.number}}
      if(user.email!==null){updateCriteria = { ...updateCriteria, email: req.body.email} }
      console.log(user[0].userName)

      User.findOneAndUpdate({userName:user[0].userName},updateCriteria).then(ress => {
        console.log("updated profile", ress);
    });
    })
  })
});

router.route('/viewreservation').post((req, res) => {
  console.log(req.body.userToken)
  Booking.find({userID:req.body.userToken}).then(bookings =>{ 
      console.log(bookings)
      res.send(bookings)
  })
})


router.route('/create-checkout-session').get(async (req, res) => {
  console.log("DAkhalt el method")
  const amount = parseInt(req.body.amount)*100
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
  let depFlight = {};
  let arrFlight = {};
  let reservationn = {};
  const reservationNumber = (Number(req.body.reservationNumber));
  Booking.findOne({ reservationNumber: Number(reservationNumber) }).then(ress => {
    reservationn = ress;
    if (req.body.userToken == ress.userID) {
      Flight.findOne({ flightNumber: reservationn.depFlightNumber }).then(resss => {
        depFlight = resss;
        Flight.findOne({ flightNumber: reservationn.arrFlightNumber }).then(resss => {
          arrFlight = resss;
          res.send({
            success: true,
            reservation: reservationn,
            departureFlight: depFlight,
            arrivalFlight: arrFlight
          })
        })
      })
    } else {
      res.send({
        success: false,
      })
    }
  })


  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  // res.send({
  //   reservation: {
  //     depFlightNumber: 1
  //     ,
  //     arrFlightNumber: 2
  //     ,
  //     Price: 55,
  //     arrEconomySeats: ['11F', '11E']
  //     ,
  //     arrBusinessSeats: ['7F']
  //     ,
  //     arrFirstClassSeats: []
  //     ,
  //     depEconomySeats: ['11F', '11E']
  //     ,
  //     depBusinessSeats: ['7F']
  //     ,
  //     depFirstClassSeats: []
  //   },
  //   departureFlight: {
  //     flightNumber: 1211,
  //     from: "happy",
  //     to: "sad",
  //     departureDate: "2021-12-18T01:34:57.000Z",
  //     arrivalDate: "2021-12-18T01:34:57.000Z",
  //     numOfEconomySeatsAvailable: 12,
  //     numOfBusinessSeatsAvailable: 33,
  //     numOfFirstClassSeatsAvailable: 44,
  //     __v: 0,
  //     basePrice: 12,
  //     EconomySeatsAvailable: ["34A", "34B", "34C", "30D", "30E"],
  //     BusinessSeatsAvailable: ["07F", "07E", "08C", "22D"],
  //     FirstClassSeatsAvailable: ["01A", "01E", "03B"]
  //   },
  //   arrivalFlight: {
  //     flightNumber: 1213,
  //     from: "happy",
  //     to: "sad",
  //     departureDate: "2021-12-24T01:34:00.000Z",
  //     arrivalDate: "2021-12-24T13:34:00.000Z",
  //     numOfEconomySeatsAvailable: 12,
  //     numOfBusinessSeatsAvailable: 33,
  //     numOfFirstClassSeatsAvailable: 44,
  //     __v: 0,
  //     basePrice: 10,
  //     EconomySeatsAvailable: ["32A", "34B", "32C", "30D", "30E"],
  //     BusinessSeatsAvailable: ["09F", "23E", "08C", "22D"],
  //     FirstClassSeatsAvailable: ["02A", "01B", "03F"]
  //   }
  // })
});

router.route('/changeSeat').post((req, res) => {
  let newSeats = [];
  const ress = req.body.reservation
  console.log(req.body);
    if (req.body.way === "dep") {
      if (ress.depEconomySeats.includes(req.body.oldSeat)) {
        newSeats = ress.depEconomySeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{depEconomySeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
      if (ress.depBusinessSeats.includes(req.body.oldSeat)) {
        newSeats = ress.depBusinessSeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{depBusinessSeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
      if (ress.depFirstClassSeats.includes(req.body.oldSeat)) {
        newSeats = ress.depFirstClassSeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{depFirstClassSeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
    } else {
      if (ress.arrEconomySeats.includes(req.body.oldSeat)) {
        newSeats = ress.arrEconomySeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{arrEconomySeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
      if (ress.arrBusinessSeats.includes(req.body.oldSeat)) {
        newSeats = ress.arrBusinessSeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{arrBusinessSeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
      if (ress.arrFirstClassSeats.includes(req.body.oldSeat)) {
        newSeats = ress.arrFirstClassSeats
        newSeats.filter(e => { return (e !== req.body.oldSeat) })
        newSeats.push(req.body.newSeat)
        Booking.findByIdAndUpdate(ress._id,{arrFirstClassSeats:newSeats}).then(ressss=>{
          res.send({success:true})
        })
      }
    }
});

router.route('/changeFlightNumber').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  res.send({
    flight:
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
<<<<<<< HEAD
  //search if the current user has this reservation number if yes remove it
  Booking.findOneAndDelete({ reservationNumber: reservationNumber }).then(ress => {
    console.log("cancelled flight", ress)
  })


=======
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
>>>>>>> 6d6ac5b56d4dc9e0ba3efbd88232d7fcca0ca339
})

router.route('/changePassword').post((req, res) => {
  jwt.verify(req.body.userToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    const user22 = user;
    User.find({ userName: user22 }).then(user => {
      if (user[0].password === req.body.oldPassword) {
        User.findByIdAndUpdate(user[0]._id, { password: req.body.newPassword }).then(res => {
          console.log("res", res);
        });
      }
      else {
        //raga3 error 3ala el front end
        console.log("8alat");
      }
    })

  });
})


export default router;