import express from "express";
import User from '../model/user.js'
//import cors from 'cors';
import jwt from 'jsonwebtoken'
import env from 'dotenv'
const router = express.Router();

env.config()


router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
})

router.route('/login').post((req, res) => {
    console.log("did we get here", req.body);

    const userName = req.body.userName;
    const password = req.body.password;
    console.log("did we get here 2", req.body);

    const ACCESS_TOKEN_SECRET = 'omar'

    const REFRESH_TOKEN_SECRET = 'hossam'

    const accesstoken = jwt.sign(req.body.userName, ACCESS_TOKEN_SECRET)
    const refreshToken = jwt.sign(req.body.userName, REFRESH_TOKEN_SECRET)
    // refreshTokens.push(refreshToken)
    console.log("????", accesstoken, refreshToken );
   // res.json({ accessToken: accesstoken, refreshToken: refreshToken })
    User.find({ userName: userName, password: password })
        .then(users => {
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


// router.route('/login').post((req, res) => {
//     console.log("did we get here", req.body);

//     const password = req.body.password;
//     const userName = req.body.userName;

//     const accesstoken = jwt.sign(user, proccess.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKRN_SECRET)
//     refreshTokens.push(refreshToken)
//     console.log("????",accesstoken,refreshToken,refreshTokens);
//     res.json({ accessToken: accessToken, refreshToken: refreshToken })

//     User.find({ userName: userName, password: password })
//         .then(users => {
//             if (users[0]) {
//                 console.log("success");
//                 res.send("success");
//             } else {
//                 console.log("fail");
//                 res.send("fail");
//             }
//         });

// })
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(403)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

//router.get

export default router;