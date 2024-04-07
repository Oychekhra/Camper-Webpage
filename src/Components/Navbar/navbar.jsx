import React from 'react'
import MenuWrapper from '../../Assets/menu.png'
import User from '../../Assets/usericon.png'
import ShoppingCart from '../../Assets/shoppingcart.png'
import { Link } from 'react-router-dom'
import { LogoWrapper, NavMiddleWrapper, NavbarContainer, NavbarWrapper } from './style'

const NavbarComponent = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <img src={MenuWrapper} alt="Menu Logo" className='Menu1'/>
        <LogoWrapper>Camper</LogoWrapper>
      </NavbarWrapper>
      <NavMiddleWrapper>
       <Link to="/">
       <select name="" id="">
            <option value="">Motor</option>
        </select>
       </Link>
        <select name="" id="">
            <option value="">Camper</option>
        </select>
        <select name="" id="">
            <option value="">Tuning</option>
        </select>
        <select name="" id="">
            <option value="">Used Car</option>
        </select>
        <p>Camping Place</p>
      </NavMiddleWrapper>
      <NavbarWrapper>
        <img src={ShoppingCart} alt="" className='ShoppingCart' />
        <img src={User} alt=""  className='User'/>
        <select name="" id="" className='Language'>
            <option value="">En</option>
            <option value="">Kor</option>
            <option value="">Rus</option>
        </select>
        <img src={MenuWrapper} alt="" className='Menu2'/>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default NavbarComponent
