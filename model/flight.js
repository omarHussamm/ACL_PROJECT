import  mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
            from: {type: String,
            required: true}
          ,
            to:{type: String,
               required: true}
             ,
            date:{type: Date,
               required: true}
             ,
            cabin:{type: String,
               required: true}
             ,
            numOfSeatsAvailable:{type: String,
               required: true}
             
        });

        const Flight = mongoose.model('flights', userSchema);
        export default Flight;