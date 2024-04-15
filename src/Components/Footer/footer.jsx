import React from 'react'
import { FooterContainer } from './style'
import { LogoName, LogoWrapper } from '../Navbar/style'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <FooterContainer>
      <LogoWrapper >
       <Link to='/' style={{textDecoration:'none'}}>
       <LogoName>Camper</LogoName>
       </Link>
      </LogoWrapper>
    </FooterContainer>
  )
}

export default FooterComponent
