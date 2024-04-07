import { useState, useEffect, useMemo} from "react";
import dayjs from "dayjs";
import moment from 'moment';
import {  Calendar } from "antd";
import { getMonthlyAttendance } from "./api";
import "./css/home.css";

import "./css/home.css";
const Calander = ({value, setValue, selectedValue, setSelectedValue, state, setState}) => {
  // const [value, setValue] = useState(() => dayjs(dayjs().format("YYYY-MM-DD")));
  // const [selectedValue, setSelectedValue] = useState(value);

  const [monthlyAttendance, setMonthlyAttendance] = useState({});




  const setupData = async () => {
    const data = await getMonthlyAttendance(selectedValue);
    let count = 0;
    let id_list = [];
    if (selectedValue.format("YYYY-MM-DD") in data) {
      count = data[selectedValue.format("YYYY-MM-DD")].total_attendance;
      id_list = data[selectedValue.format("YYYY-MM-DD")].id_list;
    }
    setMonthlyAttendance(data);
    setState({...state, id_list:id_list})
  }

  useMemo(() => {
    setupData();
  }, [selectedValue]);

  useEffect(() => {
    setupData();
  }, []);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const dateCellRender = (value) => {
    const currentDate = value.format("YYYY-MM-DD");
    // console.log("value", currentDate);
    let count = null;
    if (currentDate in monthlyAttendance) {
      count = monthlyAttendance[currentDate].total_attendance;
    }
    return <div>{count}</div>;
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);

    return info.originNode;
  };

  return (
    <>
      {
        //<Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      }
      <Calendar
        className="myCalander"
        cellRender={cellRender}
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  );
};
export default Calander;
