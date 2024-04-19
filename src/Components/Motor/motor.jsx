import React, { useState } from 'react'
import { campcar } from '../../MockData/motormock'
import { InfoContainer, LeftInfoWrapper, MiniSorterContainer, RightInfoWrapper, RightTopCon, RightTopConLeft, RightTopConRight, SorterContainer, TopContainer } from './style'
import background from '../../Assets/Home.png'
import Look1 from '../../Assets/windowIcon.png'
import Look2 from '../../Assets/viewlist.png'
import scroll from '../../Assets/scrolldown.png'
import VmenuComponent from './Menu/Vmenu'
import HmenuComponent from './Menu/Hmenu'
import CostInfoContainer from '../CostInfo/costinfo'
import CostInfoDrawer from '../CostInfo/dwawer'

const MotorComponent = () => {
    const data =campcar.maindata;
    const [active, setActive]=useState(true);
    const handleHClicked = () => {
        setActive(false)
    };
    const handleVClicked = () => {
        setActive(true)
    };
  return (
    <div style={{background:'#FAFAFA'}}>
        <TopContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Motors</p>
            <p style={{fontSize:'27px', fontWeight:700}} >Our Ranges</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Motors</p>
        </TopContainer>
        <InfoContainer>
            <LeftInfoWrapper>
            < CostInfoContainer />
            </LeftInfoWrapper>
            <RightInfoWrapper>
               <RightTopCon>
                <RightTopConLeft>
                    <div>
                    <CostInfoDrawer />
                    <p>Item  <span style={{color:'blue'}}>{data.length}</span></p>
                    </div>
                    <SorterContainer>
                        <MiniSorterContainer $Left style={{width:'200px'}}>Sort by</MiniSorterContainer>
                        <MiniSorterContainer $Right><img src={scroll} alt="scroll icon" /></MiniSorterContainer>
                    </SorterContainer>
                </RightTopConLeft>
                <RightTopConRight >
                    <SorterContainer>
                        <MiniSorterContainer $Left style={{width:'50px'}}>60</MiniSorterContainer>
                        <MiniSorterContainer $Right><img src={scroll} alt="scroll icon" /></MiniSorterContainer>
                    </SorterContainer>
                    <SorterContainer>
                        <MiniSorterContainer  onClick={handleVClicked} style={{width:"40px"}}><img src={Look1} alt="" /></MiniSorterContainer>
                        <MiniSorterContainer onClick={handleHClicked} $Right style={{width:"40px"}}><img src={Look2} alt="" /></MiniSorterContainer>
                    </SorterContainer>
                </RightTopConRight>
               </RightTopCon>
            { active ? <HmenuComponent /> : < VmenuComponent />}
            </RightInfoWrapper>
        </InfoContainer>
    </div>
  )
}

export default MotorComponent
