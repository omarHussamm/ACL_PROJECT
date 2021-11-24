// import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import User from './model/user.js'
import Flight from './model/flight.js'
import flightRoutes from './routes/flightRoutes.js';
import AdminRoutes from './routes/adminRoutes.js';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

app.use(cors())

app.use('/admin', AdminRoutes);
app.use('/flights', flightRoutes);

const PORT = process.env.PORT || 5000

User.find().then(users => {
 console.log("users",users);
});

Flight.find().then(flights => {
  console.log("flights",flights);
 });
 

app.listen(PORT);
