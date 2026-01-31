import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
//import Sidebar from './components/sidebar/SIdebar'
import Dashboard from './components/dashboard/Dashboard'
import Sidebar from './components/layout/SIdebar'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <>
    <DashboardPage/>
    </>
  )
}

export default App
