import React from 'react'
import { LogoName, LogoWrapper } from './style'
import { Link } from 'react-router-dom'

const LogoContainer = () => {
  return (
      <LogoWrapper>
       <Link to='/' style={{textDecoration:'none'}}>
       <LogoName  $Login>Camper</LogoName>
       </Link>
      </LogoWrapper>
  )
}

export default LogoContainer
