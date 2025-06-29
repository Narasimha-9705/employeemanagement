import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeesList from './components/EmployeesList'
import { Empheader } from './components/Header/Empheader'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <Router>
      <Empheader />
      <div style={{ paddingBottom: "60px" }}>
        <Routes>
        
          <Route path="/employees" element={<EmployeesList />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
