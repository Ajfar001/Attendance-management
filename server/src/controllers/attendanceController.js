import Attendance from "../models/attendance.js";
import User from "../models/user.js";

export const getUserAttendance = async (req, res) => {
  try {
    const { date } = req.query;

    let attendanceRecord = await Attendance.findOne({ date: date });
    if (!attendanceRecord) {
      attendanceRecord = { id_list: [] };
    }

    const users = await User.find();
    const userAttendance = users.map((user) => {
      const status = attendanceRecord.id_list.includes(user.id)
        ? "Present"
        : "Absent";

      return {
        id: user.id,
        name: user.name,
        status,
      };
    });

    res.status(200).json(userAttendance);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

export const addUserAttendance = async (req, res) => {
  try {
    const { id_list, date } = req.body;

    const total_attendance = id_list.length;

   
    let attendanceRecord = await Attendance.findOne({ date });

    if (!attendanceRecord) {
     
      attendanceRecord = new Attendance({
        date,
        id_list,
        total_attendance,
      });

      await attendanceRecord.save();
    } else {
      attendanceRecord.id_list = id_list;
      attendanceRecord.total_attendance = total_attendance;

      await attendanceRecord.save();
    }

    res.status(201).json(attendanceRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getTotalUserAttendance = async (req, res) => {
  try {
    const { date } = req.query;

    // Find attendance record for the specified date
    const attendanceRecord = await Attendance.findOne({ date });

    // If attendance record not found, return 0
    if (!attendanceRecord) {
      return res.status(200).json({ total_users: 0 });
    }

    // Get total number of users

    res.status(200).json({ total_users: attendanceRecord.total_attendance });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

export const getMonthlyAttendance = async (req, res) => {
  try {
    const { date } = req.query;
    let startDate = new Date(date)
    let endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    );
    startDate = startDate.toISOString().split('T')[0]
    startDate = startDate.split('-').slice(0, 2).join('-') + '-01'
    endDate = endDate.toISOString().split('T')[0]
    endDate = endDate.split('-').slice(0, 2).join('-') + '-33'

    console.log(startDate, endDate);

    const monthlyAttendance = await Attendance.find({
      date: { $gte: startDate, $lte: endDate },
    });

    res.status(200).json(monthlyAttendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
