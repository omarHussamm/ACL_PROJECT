// import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import User from './model/user.js'
import Flight from './model/flight.js'
// import flightRoutes from './routes/flightRoutes.js';
// import AdminRoutes from './routes/adminRoutes.js';

import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(express.json());
connectDB();

// app.use('/admin', AdminRoutes);

const PORT = process.env.PORT || 5000

User.find().then(users => {
 console.log("users",users[0]);
});

Flight.find().then(flights => {
  console.log("flights",flights[0]);
 });
 

app.listen(PORT);
app.get('/', (req,res) => {
res.send('hi')
})