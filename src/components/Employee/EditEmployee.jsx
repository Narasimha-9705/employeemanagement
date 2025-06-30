// src/components/EditEmployee.jsx
import React, { useEffect, useState } from 'react';
import Empservice from '../Service/Empservice';
import { useNavigate, useParams } from 'react-router-dom';
import "./Employeeform.css"

const EditEmployee = () => {
  const { id } = useParams();
  const [emp, setEmp] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    Empservice.getEmployeeById(id).then(res => setEmp(res.data));
  }, [id]);

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Empservice.updateEmployee(id, emp).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}  className="form-container">
      <h2>Edit Employee</h2>
      <input name="firstName" value={emp.firstName} onChange={handleChange} required />
      <input name="lastName" value={emp.lastName} onChange={handleChange} required />
      <input name="email" value={emp.email} onChange={handleChange} required />
      <input name="password" value={emp.password} type="password" onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;
