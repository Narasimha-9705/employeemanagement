import { useState } from 'react'

import './App.css'
import EmployeesList from './components/EmployeesList'
import { Empheader } from './components/Header/Empheader'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditEmployee from './components/Employee/EditEmployee'
import AddEmployee from './components/Employee/AddEmployee'

function App() {
 

  return (
    <>

      
      <Router>
      <Empheader />
      <div style={{ paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<EmployeesList/>}/>
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/add" element={<AddEmployee />} />
           <Route path="/edit/:id" element={<EditEmployee />} />  
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
