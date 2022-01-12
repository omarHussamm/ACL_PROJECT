// import Counters from '../model/counters.js'
import express from "express";
const router = express.Router();

function getNextSequenceValue() {
    var sequenceDocument = Counters.findByIdAndUpdate("61da248fb7ec7bace2763773",
    {
       $inc: { sequence: 1 } ,
    }).then(res => {
      return res.sequence;
    });
}

router.route('/booking').post((req, res) => {
  //////THIS IS DUMMY DATA TO BE REPLACED WITH REAL CODE//////
  
});

export default router;