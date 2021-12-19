import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  flightID: {
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
  numOfEconomySeats: {
    type: Number,
    required: true
  }
  ,
  numOfBusinessSeats: {
    type: Number,
    required: true
  }
  ,
  numOfFirstClassSeats: {
    type: Number,
    required: true
  }
  ,

});

const Booking = mongoose.model('bookings', userSchema);
export default Booking;