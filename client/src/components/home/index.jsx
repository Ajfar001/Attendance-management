import Calander from "./calander";
import { Grid, Box } from "@mui/material";
import { Button } from "@mui/material";
import Modal from "./modal";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getDailyAttendance, getTotalAttendance } from "./api";

import { Table } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    // render: (text) => {text},
  },

  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <div
        style={{
          color:
            text === "Present" ? "green" : text === "Absent" ? "red" : "blue",
          borderRadius: "5px",
        }}
      >
        {text}
      </div>
    ),
  },
];
const data = [
  {
    id: 1,
    key: 1,
    name: "John",
    status: "Present",
  },
  {
    id: 2,
    key: 2,
    name: "Alice",
    status: "Absent",
  },
  {
    id: 3,
    key: 3,
    name: "Bob",
    status: "Not Taken",
  },
  {
    id: 4,
    key: 4,
    name: "Emma",
    status: "Present",
  },
  {
    id: 5,
    key: 5,
    name: "Michael",
    status: "Absent",
  },
  {
    id: 6,
    key: 6,
    name: "Sarah",
    status: "Not Taken",
  },
  {
    id: 7,
    key: 7,
    name: "David",
    status: "Present",
  },
  {
    id: 8,
    key: 8,
    name: "Sophia",
    status: "Absent",
  },
  {
    id: 9,
    key: 9,
    name: "Matthew",
    status: "Not Taken",
  },
  {
    id: 10,
    key: 10,
    name: "Emily",
    status: "Present",
  },
  {
    id: 11,
    key: 11,
    name: "Daniel",
    status: "Absent",
  },
  {
    id: 12,
    key: 12,
    name: "Olivia",
    status: "Not Taken",
  },
  {
    id: 13,
    key: 13,
    name: "James",
    status: "Present",
  },
  {
    id: 14,
    key: 14,
    name: "Grace",
    status: "Absent",
  },
  {
    id: 15,
    key: 15,
    name: "Alexander",
    status: "Not Taken",
  },
  {
    id: 16,
    key: 16,
    name: "Ava",
    status: "Present",
  },
  {
    id: 17,
    key: 17,
    name: "William",
    status: "Absent",
  },
  {
    id: 18,
    key: 18,
    name: "Charlotte",
    status: "Not Taken",
  },
  {
    id: 19,
    key: 19,
    name: "Ethan",
    status: "Present",
  },
  {
    id: 20,
    key: 20,
    name: "Mia",
    status: "Absent",
  },
];

function MyApp() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(() => dayjs(dayjs().format("YYYY-MM-DD")));
  const [selectedValue, setSelectedValue] = useState(value);
  const [tableData, setTableData] = useState([]);
  const [state, setState] = useState({
    totalUsers: 0,
    presentUsers: 0,
    id_list: [],
    currentSelectedDate:value
  });

  // console.log("tableData", tableData);

  useEffect(() => {
    const setupData = async () => {
      const data = await getDailyAttendance(selectedValue.format("YYYY-MM-DD"));
      setTableData(data);
      let count = await getTotalAttendance(selectedValue.format("YYYY-MM-DD"));

      // console.log("data", data);
      // let count = 0;

      // for (let i = 0; i < data?.length; i++) {
      //   if (data[i].status === "Present") {
      //     count++;
      //   }
      // }
      setState({...state, totalUsers: data.length,presentUsers:count, currentSelectedDate:selectedValue.format("YYYY-MM-DD")})

    };
    setupData();

  }, [selectedValue]);

 
  return (
    <Box
      container
      style={{
        margin: "0",
        padding: "0",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Modal show={show} setShow={setShow} tableData={tableData} setTableData={setTableData} selectedValue={selectedValue} state={state}/>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#7C7BAD",
          height: "10vh",
          marginTop: "1rem",
        }}
      >
        <Grid
          item
          style={{
            marginLeft: "3rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Attendances
        </Grid>

        <Grid
          item
          style={{
            marginRight: "3rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {"Admin"}
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          margin: "0",
          padding: "0",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4rem",
          gap: "10rem",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={5.5} lg={5.5} xl={5.5}>
            <Calander
              value={value}
              setValue={setValue}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              state={state}
              setState={setState}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={5.5}
            lg={5.5}
            xl={5.5}
            style={{
              backgroundColor: "white",
              marginTop: "1rem",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#7C7BAD",
                color: "white",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Attendances for {new Date().toDateString()}
              </div>
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  borderColor: "white",
                }}
                onClick={() => setShow(true)}
              >
                {" "}
                Take Attendances
              </Button>
            </Box>

            <Box
              container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "15vh",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    backgroundColor: "#9cb8d6",
                    width: "16vw",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ textDecoration: "none" }}>Attendance</div>
                  <div>{state.presentUsers}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "15vh",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    backgroundColor: "#9cb8d6",
                    width: "16vw",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ textDecoration: "none" }}>Total Employer</div>
                  <div>{state.totalUsers}</div>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "21.5vw",
                      backgroundColor: "#9cb8d6",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                  >
                    People
                  </div>

                  <div
                    style={{
                      overflowY: "auto",
                      maxHeight: "45vh",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  >
                    {data.length > 0 ? (
                      <Table
                        // rowSelection={{
                        //   type: "checkbox",
                        //   ...rowSelection,
                        // }}
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                      />
                    ) : (
                      <div
                        style={{
                          textAlign: "center",
                          paddingTop: "3rem",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          border: "none",
                        }}
                      >
                        {" "}
                        No Data Available
                      </div>
                    )}
                  </div>
                </Grid>
                {/* <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={listheaderStyles}>Absent Employer</div>

                  <div
                    style={{
                      overflowY: "auto",
                      maxHeight: "20vh",
                      border: "1px solid #ccc",
                    }}
                  >
                    {itemList.length > 0 ? (
                      itemList.map((item, index) => (
                        <div key={index} style={listItemStyles}>
                          {item}
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MyApp;
