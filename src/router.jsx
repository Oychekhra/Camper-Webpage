import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './Components/Navbar/navbar'
import HomeComponent from './Components/Home/home'
import FooterComponent from './Components/Footer/footer'

const RouterComponent = () => {
  return (
    <div>
     <>
     <NavbarComponent />
     <Routes>
        <Route path='/' element={<HomeComponent />}/>
     </Routes>
     <FooterComponent />
     </> 
    </div>
  )
}

export default RouterComponent
