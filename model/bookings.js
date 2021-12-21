import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  depFlightID: {
    type: ObjectId,
    required: true
  },
  arrFlightID: {
    type: ObjectId,
    required: true
  },
  userID: {
    type: ObjectId,
    required: true
  }
  ,
  Price: {
    type: Number,
    required: true
  },
  arrEconomySeats: {
    type: [String],
    required: true
  }
  ,
  arrBusinessSeats: {
    type: [String],
    required: true
  }
  ,
  arrFirstClassSeats: {
    type: [String],
    required: true
  }
  ,
  depEconomySeats: {
    type: [String],
    required: true
  }
  ,
  depBusinessSeats: {
    type: [String],
    required: true
  }
  ,
  depFirstClassSeats: {
    type: [String],
    required: true
  }


});

const Booking = mongoose.model('bookings', userSchema);
export default Booking;