import React from "react";
import { Table } from "react-bootstrap";

const Dashboard = () => {
  const dummyData = [
    { userName: "rahul SOni", email: "rahul@g.com", age: 22 },
    { userName: "jenish patel", email: "jenish@ppp.com", age: 30 },
  ];
  return (
    <div>
      <div className="d-flex justify-content-center  mb-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={item}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <div className="d-flex">
                    <div>E</div>
                    <div>D</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
