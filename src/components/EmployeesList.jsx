// src/components/EmployeesList.jsx
import React, { useEffect, useState } from 'react';
import './EmployeesList.css';

import { useNavigate } from 'react-router-dom';
import Empservice from './Service/Empservice';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Empservice.getEmployees().then((res) => {  
      setEmployees(res.data);
    });           
  }, []);

  const deleteEmployee = (id) => {
    Empservice.deleteEmployee(id).then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Employee Table</h2>
      <button className="add-btn" onClick={() => navigate('/add')}>Add Employee</button>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td className="actions-cell">
               <button className="edit-btn" onClick={() => navigate(`/edit/${emp.id}`)}>Edit</button>
               <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
