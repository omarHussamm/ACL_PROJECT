import express from "express";
import User from '../model/user.js'
const router = express.Router();
router.options('*', cors())

router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
})

router.route('/login').post((req, res) => {
    console.log("did we get here", req.body);
    const userName = req.body.userName;
    const password = req.body.password;
    User.find({ userName: userName, password: password })
        .then(users => {
            if (users[0]) {
                console.log("success");
                res.send("success");
            }else{
                console.log("fail");
                res.send("fail");
            }
        });

})

//router.get

export default router;