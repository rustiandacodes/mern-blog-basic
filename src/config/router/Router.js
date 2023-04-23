import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}

export default Router
