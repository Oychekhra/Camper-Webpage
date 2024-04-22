import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './Components/Navbar/navbar'
import FooterComponent from './Components/Footer/footer'
import HomeComponent from './Components/home/home'
import TuningComponent from './Components/Tuning/tuning'
import MotorComponent from './Components/Motor/motor'
import CaravanComponent from './Components/Caravan/caravan'
import UsedCarComponent from './Components/UsedCars/usedcar'
import CarDetailsComponent from './Components/CarDetails/cardetails'

const RouterComponent = () => {
  return (
    <div>
     <>
     <NavbarComponent />
     <Routes>
      <Route path='/'  element={<HomeComponent />}/>
        <Route path='/motor' element={<MotorComponent />}/>
        <Route path='/tuning' element={<TuningComponent />}/>
        <Route path='/caravan' element={<CaravanComponent />}/>
        <Route path='/usedcar' element={<UsedCarComponent />}/>
        <Route path='/motor/:id' element={<CarDetailsComponent/>} />
        
        
     </Routes>
     <FooterComponent />
     </> 
    </div>
  )
}

export default RouterComponent
