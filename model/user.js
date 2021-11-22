import  mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
            firstName: {type: String,
            required: true}
            ,
            lastName: {type: String,
            required: true}
            ,
            homeAddress: {type: String,
            required: true}
             ,
            countryCode:{type: String,
               required: true}
             ,
            telephoneNumber:{type: String,
               required: true}
            ,
            userName: {type: String,
            unique: true,
            required: true},

            password: {type: String,
            required: true},

            email: {type: String,
            unique: true,
            required: true},

            type: {type: Number,
                required: true}
             //type 0 = adminstrator ,type 2 = user ,type 3 = guest
        });

const User = mongoose.model('users', userSchema);
export default User; 