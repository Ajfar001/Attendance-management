import { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

import { updateAttendance } from "./api";
import AttantdanceTable from "./attandanceTable.jsx";

const Modal = ({ show, setShow, tableData, setTableData, state }) => {
  //   const [show, setShow] = useState(true);

  const [selectedRowKeys, setSelectedRowKeys] = useState(state?.id_list || []);

  return (
    <div
      className="modal"
      style={{
        display: show ? "block" : "none",
        zIndex: 100,
        width: "100vw",
        height: "100vh",

        position: "absolute",

        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          width: "70vw",
          height: "80vh",
          backgroundColor: "white",
          border: "1px solid #7C7BAD",
          borderRadius: "10px",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            style={{
              position: "absolute",
              top: "5%",
              left: "15%",
              width: "70%",
            }}
          >
            <AttantdanceTable
              selectedRowKeys={selectedRowKeys}
              setSelectedRowKeys={setSelectedRowKeys}
              data={tableData}
            />
          </Grid>

          <Grid
            style={{
              position: "absolute",
              bottom: "5%",
              right: "5%",
            }}
          >
            <div
              style={{
                width: "15vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="info"
                onClick={async () => {
                  await updateAttendance({
                    id_list: selectedRowKeys,
                    date: state.currentSelectedDate,
                  });
                  setShow(false);
                  window.location.reload();
                }}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<CancelOutlinedIcon />}
                onClick={() => {
                  setShow(false);
                  window.location.reload();
                }}
              >
                Close
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Modal;
