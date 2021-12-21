import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    tokens: {
        type: [String],
        required: true,
    }
});

const RefreshTokens = mongoose.model('refreshTokens', userSchema);
export default RefreshTokens;