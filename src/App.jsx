import React from 'react'
import "./App.css"
import Home from './screens/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './screens/Login'
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App