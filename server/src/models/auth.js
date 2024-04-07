
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Auth = mongoose.model('Auth', userSchema);

export default Auth;
