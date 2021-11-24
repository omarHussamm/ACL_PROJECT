import express from "express";

import { resolve } from "path";
import User from '../model/user.js'
const router = express.Router();


router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
})


router.route('/login').post((req, res) => {
    
    const userName = req.body.userName;
    const password = req.body.password;
    User.find({ userName: userName, password: password })
    .then(users => res.json(users));

})

//router.get

export default router;