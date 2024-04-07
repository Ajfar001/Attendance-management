import express from 'express';
import { addUserAttendance, getMonthlyAttendance, getUserAttendance } from '../controllers/attendanceController.js';
import { loginUser, registerUser } from '../controllers/authentication.js';
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);


export default router;
