import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'



const Router = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router