import React from 'react'
import "./Empheader.css"
import { Link } from 'react-router-dom';

export const Empheader = () => {
  return (  
    <div>
         <header className="header">
      <div className="logo">Employee Management</div>
      <nav className="nav-links">
 
  <Link to="/employees">Employees</Link>
  
</nav> 
      
      <div>icon</div>
    </header>
    </div>
  )
}
