import React from 'react'
import Popup from 'reactjs-popup';
import { AuthContainer, Button, LogoContainer, LogoWrapper, MemoryContainer, MemoryContainerRight, MiniUserInfo, OrContainer, TitleContainer, UserInfo } from './style'
import { Link } from 'react-router-dom'
import Naver from '../../Assets/authentication/naver.png'
import  Google  from '../../Assets/authentication/google.png'
import  Kakao  from '../../Assets/authentication/kakao.png'
import {Icon} from '../Navbar/style'
import UserIcon from '../../Assets/usericon.png'


const LoginComponent = () => {
  return (
         <div>
        <Popup
            trigger={<Icon src={UserIcon} alt="User Icon" />}
            modal
            nested
        >
            {close => (
           <>
             <AuthContainer>
                 <TitleContainer>
                <h1>Sign in</h1>
                </TitleContainer>
                <form>
                   <UserInfo>
                  <MiniUserInfo>
                    <label>Email</label>
                    <input type="text"  name="ID" placeholder='Your E-mail address'/>
                  </MiniUserInfo>
                  <MiniUserInfo>
                  <label>Password</label>
                  <input type="password"  name="password" placeholder='Password'/>
                  </MiniUserInfo>
                   </UserInfo>
                   <MemoryContainer>
                    <MemoryContainerRight>
                    <input type="checkbox" />
                    <label>Keep me logged in</label>
                    </MemoryContainerRight>
                    <div>Forget your password?</div>
                   </MemoryContainer>
                   <Button><button>SIGN IN</button></Button>
                   <OrContainer>
                    <hr/>
                    <div>OR</div>
                    <hr/>
                   </OrContainer>
                   <LogoContainer>
                    <LogoWrapper style={{backgroundColor:'#039600'}}><img src={Naver} alt="Naver Logo" /></LogoWrapper>
                    <LogoWrapper style={{backgroundColor:'#BC0000'}}><img src={Google} alt="Google Logo" /></LogoWrapper>
                    <LogoWrapper style={{backgroundColor:'#FFC700'}}><img src={Kakao} alt="Kakao Logo" /></LogoWrapper>
                   </LogoContainer>
                   <Link to="/signup"><Button><button>CREATE ACCOUNT</button></Button></Link>
                </form>
            </AuthContainer>
           </>
            )}
        </Popup>
        </div>
  )
}

export default LoginComponent
