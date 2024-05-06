import React from 'react'
import { TopContainer } from '../Motor/style'
import background from '../../Assets/campingplaces/mainpage.png'
import { campingplaces } from '../../MockData/campingplaces';
import { CampingInfoContainer } from './style';
import { CampCarWrapper } from '../Motor/Menu/Hmenustyle';
import { Link } from 'react-router-dom';
import { ImgWrapper } from '../Tabs/style';
import { InfoWrapper } from '../Motor/Menu/vmenustyle';

const CampingPlaceComponent = () => {
    const data =campingplaces.maindata;
  return (
    <div>
      <TopContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Camping Place</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Camping Places</p>
        </TopContainer> 
        <CampingInfoContainer>
    {data.map((value, key) =>{
        return(
            <Link to={`${value.id}`} style={{textDecorationLine:'none', textDecorationColor:'none'}}>
            <CampCarWrapper key={key}>
               <ImgWrapper>
                <img src={value.place.Photo || "No Data"} alt="" />
                </ImgWrapper>
                <InfoWrapper>
                <h2>{value.place.name}</h2>
                <div>{value.place.City}</div>
                </InfoWrapper>
            </CampCarWrapper>
            </Link>
        );
    })}
   </CampingInfoContainer>
    </div>
  )
}

export default CampingPlaceComponent
