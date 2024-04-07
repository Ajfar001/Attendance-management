import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import attendanceRoutes from './src/routes/router.js';
import authRoutes from './src/routes/authRouter.js';
import {authenticateToken} from './src/controllers/authentication.js';

const app = express();


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/',authenticateToken, attendanceRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
