import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  date: { type: String, unique: true },
  id_list: [Number],
  total_attendance: Number,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
