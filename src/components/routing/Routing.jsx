import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../auth_pages/Login'
import Registration from '../auth_pages/Registration'
import Dashboard from '../auth_pages/Dashboard'
import Verification from '../auth_pages/Verification'
import ForgetPass from '../auth_pages/ForgetPass'
const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/registration' element={<Registration></Registration>}></Route>
            <Route path='/verification' element={<Verification></Verification>}></Route>
            <Route path='/forget-password' element={<ForgetPass></ForgetPass>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </Router>
  )
}

export default Routing