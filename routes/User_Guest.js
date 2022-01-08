import express, { application } from "express";
import User from '../model/user.js'
import bcrypt from 'bcrypt'
//import cors from 'cors';
import jwt from 'jsonwebtoken'
import env from 'dotenv'
const router = express.Router();

router.route('/signup').post( async (req, res) => {
    const FirstName= req.body.newUser.firstName;
    const LastName= req.body.newUser.lastName;
    const HomeAddress= req.body.newUser.homeAddress;
    const CounrtyCode= req.body.newUser.countryCode;
    const Email= req.body.newUser.email;
    const PassportNum= req.body.newUser.passport;
    const type='1';
    const telephoneNumber= [].concat(req.body.newUser.telephoneNumber);
    const userName=req.body.newUser.userName; 
    const hashedPassword= await bcrypt.hash(req.body.newUser.password,10)
    var NewUser = {type:type,password:hashedPassword, firstName: FirstName, lastName: LastName,userName:userName, homeAddress:HomeAddress, countryCode: CounrtyCode, email:Email,telephoneNumber:telephoneNumber, Passportnumber: PassportNum};
    User.insertMany(NewUser, function(err,res) {
        if (err) throw err;
        console.log("1 user inserted");
    });

});


export default router;