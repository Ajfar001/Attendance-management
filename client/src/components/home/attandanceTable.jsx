// import { useState } from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
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

const AttantdanceTable = ({selectedRowKeys, setSelectedRowKeys, data}) => {
 

//   const [selectedRowKeys, setSelectedRowKeys] = useState([2, 5]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setSelectedRowKeys(selectedRowKeys);
    },
    selectedRowKeys: selectedRowKeys,
  };

  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          padding: "1rem",
          borderRadius: "5px",
          backgroundColor: "#7C7BAD",
        }}
      >
        Mark and Submit To Take Attandance
      </div>

      <div
        style={{
          height: "55vh",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default AttantdanceTable;
