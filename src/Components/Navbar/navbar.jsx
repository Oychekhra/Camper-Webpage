import React from 'react'
import UserIcon from '../../Assets/usericon.png'
import ShoppingCart from '../../Assets/shoppingcart.png'
import { Link } from 'react-router-dom'
import { NavbarContainer, MiddleNavbarWrapper, SideNavbarWrapper, Icon, } from './style'
import LogoContainer from './Logo'
import scroll from '../../Assets/scrolldown.png'
import RightDrawerComponent from './Drawer/right'
import LeftDrawerComponent from './Drawer/left'

const NavbarComponent = () => {
  return (
    <NavbarContainer>
      <SideNavbarWrapper>
        <LeftDrawerComponent/>
        <LogoContainer />
      </SideNavbarWrapper>
      <MiddleNavbarWrapper>
        <Link to='/motor' style={{textDecorationLine:'none'}}>
        <div>
          <p>Motor</p>
          <img src={scroll} alt="" />
        </div>
        </Link>
        <Link to='/caravan' style={{textDecorationLine:'none'}}>
        <div>
          <p> Caravan</p>
          <img src={scroll} alt="" />
        </div>
        </Link>
       <Link to='/tuning' style={{textDecorationLine:'none'}}>
       <div>
          <p>Tuning</p>
          <img src={scroll} alt="" />
        </div>
       </Link>
        <Link to='/usedcar' style={{textDecorationLine:'none'}}>
        <div>
          <p>Used Car</p>
          <img src={scroll} alt="" />
        </div>
        </Link>
        <p>Camping Place</p>
      </MiddleNavbarWrapper>
      <SideNavbarWrapper>
        <img src={ShoppingCart} alt=" Shopping Cart Icon"/>
       <Link to="/loginpage" tyle={{textDecorationLine:'none'}}> <Icon src={UserIcon} alt="User Icon" /></Link>
        <select name="" id="">
            <option value="">Eng</option>
            <option value="">Kor</option>
            <option value="">Rus</option>
        </select>
        <RightDrawerComponent />
      </SideNavbarWrapper>
    </NavbarContainer>
  )
}

export default NavbarComponent
