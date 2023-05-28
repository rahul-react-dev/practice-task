import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import { Table } from "react-bootstrap";
import EDIT_ICON from "../../assets/edit.svg";
import DELETE_ICON from "../../assets/delete.svg";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="table-container mt-4">
        <Table striped bordered hover className="table-data">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="d-flex justify-content-around">
                  <img src={EDIT_ICON} alt="edit" />
                  <img src={DELETE_ICON} alt="delete" />
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
