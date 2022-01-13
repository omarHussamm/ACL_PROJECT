import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    unique: true,
    required: true,
    dropDups: true
  },
  from: {
    type: String,
    required: true
  }
  ,
  to: {
    type: String,
    required: true
  }
  ,
  departureDate: {
    type: Date,
    required: true
  }
  ,
  arrivalDate: {
    type: Date,
    required: true
  }
  ,
  model:{
    type: String,
    required: true
  }
  ,
  basePrice: {
    type: Number,
    required: true
  }
  ,
  economySeatsAvailable: {
    type: [String],
    required: true
  }
  ,
  businessSeatsAvailable: {
    type: [String],
    required: true
  }
  ,
  firstClassSeatsAvailable: {
    type: [String],
    required: true
  }
  ,
  numofEconomySeatsAvailable: {
    type: Number,
    required: true
  }
  ,
  numofBusinessSeatsAvailable: {
    type: Number,
    required: true
  }
  ,
  numofFirstClassSeatsAvailable: {
    type: Number,
    required: true
  }
  ,

});

const Flight = mongoose.model('flights', userSchema);
export default Flight;