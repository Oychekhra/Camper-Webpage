import React from 'react'
import { AuthContainer, Button, MainContainer, MemoryContainer, MemoryContainerRight, MiniUserInfo, TitleContainer, UserInfo } from './style'
import { Link } from 'react-router-dom'
import Exit from '../../Assets/authentication/exit.png'


const SignUpComponent = () => {
  return (
   <MainContainer>
     <AuthContainer>
        <TitleContainer>
        <h1>Registrate</h1>
        <Link to="/" ><img src={Exit} alt=" Exit Logo" /></Link>
        </TitleContainer>
        <form>
           <UserInfo>
          <MiniUserInfo>
            <label>Email</label>
            <input type="text"  name="ID" placeholder='Your E-mail address'/>
          </MiniUserInfo>
          <MiniUserInfo>
          <label>Password</label>
          <input type="password"  name="password" placeholder='Your password'/>
          </MiniUserInfo>
          <MiniUserInfo>
          <label>Repeat your Password</label>
          <input type="password"  name="password" placeholder='Your password'/>
          </MiniUserInfo>
           </UserInfo>
           <MemoryContainer>
            <MemoryContainerRight>
            <input type="checkbox" />
            <label>Keep me logged in</label>
            </MemoryContainerRight>
           </MemoryContainer>
           <Button><button>REGISTRATE</button></Button>
        </form>
    </AuthContainer>
   </MainContainer>
  )
}

export default SignUpComponent