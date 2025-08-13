import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'
import Orders from '../pages/Orders'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'

export default function AppRoutes() {
  return (
    <main className="min-h-screen">
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>

          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
        </Routes>
      
    </main>
  )
}
