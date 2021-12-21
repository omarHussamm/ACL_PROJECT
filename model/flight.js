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
  numOfEconomySeatsAvailable: {
    type: Number,
    required: true
  }
  ,
  numOfBusinessSeatsAvailable: {
    type: Number,
    required: true
  }
  ,
  numOfFirstClassSeatsAvailable: {
    type: Number,
    required: true
  }
  ,
  basePrice: {
    type: Number,
    required: true
  }
  ,
  EconomySeatsAvailable: {
    type: [String],
    required: true
  }
  ,
  BusinessSeatsAvailable: {
    type: [String],
    required: true
  }
  ,
  FirstClassSeatsAvailable: {
    type: [String],
    required: true
  }
  ,


});

const Flight = mongoose.model('flights', userSchema);
export default Flight;