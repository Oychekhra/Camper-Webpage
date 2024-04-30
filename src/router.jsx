import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavbarComponent from './Components/Navbar/navbar'
import FooterComponent from './Components/Footer/footer'
import HomeComponent from './Components/home/home'
import TuningComponent from './Components/Tuning/tuning'
import MotorComponent from './Components/Motor/motor'
import CaravanComponent from './Components/Caravan/caravan'
import UsedCarComponent from './Components/UsedCars/usedcar'
import CarDetailsComponent from './Components/Motor/CarDetails/cardetails'
import LoginComponent from './Components/Authentication/loginpage'
import SignUpComponent from './Components/Authentication/signup'

const RouterComponent = () => {
  const location =useLocation();

  const showNavFooterNavigate = location.pathname !=="/signup" && location.pathname !=='/loginpage';
  return (
    <div>
     <>
     {showNavFooterNavigate &&  <NavbarComponent />}
     <Routes>
      <Route path='/'  element={<HomeComponent />}/>
        <Route path='/motor' element={<MotorComponent />}/>
        <Route path='/tuning' element={<TuningComponent />}/>
        <Route path='/caravan' element={<CaravanComponent />}/>
        <Route path='/usedcar' element={<UsedCarComponent />}/>
        <Route path='/motor/:id' element={<CarDetailsComponent/>} />
        <Route path='/loginpage' element={<LoginComponent/>} />
        <Route path='/signup' element={<SignUpComponent/>} />
        
     </Routes>
     {showNavFooterNavigate && <FooterComponent/>}
     </> 
    </div>
  )
}

export default RouterComponent
