import React from 'react'
import { LogoWrapper } from '../Navbar/style'
import { FooterContainer } from './style'

const FooterComponent = () => {
  return (
    <FooterContainer>
      <LogoWrapper style={{color:'white'}}>
        Camper
      </LogoWrapper>
    </FooterContainer>
  )
}

export default FooterComponent
