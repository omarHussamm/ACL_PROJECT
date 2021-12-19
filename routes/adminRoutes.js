import express from "express";
import User from '../model/user.js'
import cors from 'cors';
const router = express.Router();

router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
})

router.route('/login').post((req, res) => {
    console.log("did we get here", req.body);
    const userName = req.body.userName;
    const password = req.body.password;
    User.find({ userName: userName, password: password })
        .then(users => {
            console.log("users",users);
            if (users[0]) {
                console.log("success");
                res.send({
                    loggedIN: "success",
                    type: users[0].type
                });
            } else {
                console.log("fail");
                res.send({ loggedIN: "fail" });
            }
        });

})

//router.get

export default router;