import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    unique: true,
    required: true,
    dropDups: true
  }
});

const Counter = mongoose.model('counters', userSchema);
export default Counter;