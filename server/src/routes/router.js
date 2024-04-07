import express from 'express';
import { addUserAttendance, getMonthlyAttendance, getUserAttendance, getTotalUserAttendance } from '../controllers/attendanceController.js';

const router = express.Router();

router.post('/addUserAttendance', addUserAttendance);
router.get('/getUserAttendance', getUserAttendance);
router.get('/getTotalUserAttendance', getTotalUserAttendance);
router.get('/monthlyAttendance', getMonthlyAttendance);

export default router;
