import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Dashboard from "./Dashboard";
import AddUserModal from "./AddUserModal";

const Home = () => {
  const [addUserModalState, setAddUserModal] = useState(false);
  const handleAddUser = () => setAddUserModal(true);
  const handleModalClose = () => setAddUserModal(false);
  return (
    <div>
      <div className="p-4">
        <div className="d-flex justify-content-between mt-3 mb-3 align-items-center">
          <h3 className="mb-0">USER DETAILS</h3>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </div>
        <Dashboard />
      </div>
      <AddUserModal show={addUserModalState} close={handleModalClose} />
    </div>
  );
};

export default Home;
