import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Contact from '../pages/contact/Contact'



const Router = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Contact />} />
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router