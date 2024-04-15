import React from 'react'
import { DrawerContainer, MotorType, CloseBtn } from './style';
import Arrow from '../../../Assets/rightarrow.png'
import Close from '../../../Assets/closebtn.png'
import { Link } from 'react-router-dom';

const DrawerItems = () => {
  return (
    <DrawerContainer>
        <CloseBtn>
            <img src={Close} alt="" />
        </CloseBtn>
        <br/>
        <Link to='/motor' style={{textDecoration:'none', width:'100%'}}>
        <MotorType>
          <p>Motor</p>
          <img src={Arrow} alt="" />
        </MotorType>
        </Link>
        <Link to='/caravan' style={{textDecoration:'none', width:'100%'}}>
        <MotorType>
        <p>Caravan</p>
          <img src={Arrow} alt="" />
        </MotorType>
        </Link>
        <Link to='/tuning' style={{textDecoration:'none', width:'100%'}}>
        <MotorType>
        <p>Tuning</p>
          <img src={Arrow} alt="" />
        </MotorType>
        </Link>
        <Link to='/usedcar' style={{textDecoration:'none', width:'100%'}}>
        <MotorType>
        <p>Second Hand</p>
          <img src={Arrow} alt="" />
        </MotorType>
        </Link>
        <div>Camping Place</div>
        <div>Sign in</div>
        <div>My orders</div>
        <div>
          <select >
            <option value="">Eng</option>
            <option>Kor</option>
          </select>
        </div>
        <br /><br />
        <p>Log out</p>

    </DrawerContainer>
  )
}

export default DrawerItems
