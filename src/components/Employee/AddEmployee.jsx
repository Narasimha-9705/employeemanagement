import React, { useState } from 'react';
import Empservice from '../Service/Empservice';
import { useNavigate } from 'react-router-dom';
import './Employeeform.css'

const AddEmployee = () => {
  const [emp, setEmp] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Empservice.createEmployee(emp).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}  className="form-container">
      <h2>Add Employee</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddEmployee;
