import Counter from './model/counter.js'
import express from 'express';
import dotenv from 'dotenv';
// import User from './model/user.js'
// import Flight from './model/flight.js'
import flightRoutes from './routes/flightRoutes.js';
import AdminRoutes from './routes/adminRoutes.js';
import User_Guest from './routes/guestUserRoutes.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();


app.use(cors())

app.use('/admin', AdminRoutes);
app.use('/userGuest', User_Guest);
app.use('/flights', flightRoutes);
app.use('/user', userRoutes);

const PORT = 5000

// User.find().then(users => {
//   console.log("users", users);
// });

// Flight.find().then(flights => {
//   console.log("flights", flights);
// });
function getNextSequenceValue() {
    var sequenceDocument = Counter.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
       $inc: { sequence: 1 } ,
    }).then(res => {
        console.log(res.sequence);
      return res.sequence;
     
    }); 
}

getNextSequenceValue();

app.listen(PORT);
