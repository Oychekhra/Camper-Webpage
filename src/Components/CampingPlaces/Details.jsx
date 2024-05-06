import React from 'react'
import { useParams } from 'react-router-dom'
import { CampingDetailsMiniWrapper, CampingDetailsWrapper, CampingNameWrapper, CampingPlaceWrapper,  DescriptionWrapper,  ImageContainer,  LocationName, LocationWrapper } from './style';
import { campingplaces } from '../../MockData/campingplaces';
import location from '../../Assets/campingplaces/location.png'
import clock from '../../Assets/campingplaces/clock.png'
import homepage from '../../Assets/campingplaces/homepage.png'
import phone from '../../Assets/campingplaces/phone.png'

const DetailsComponent = () => {
    let {id} = useParams();
    const resultData =campingplaces.maindata.find(
        (value) => value.id === parseInt(id)
    );
  return (
<CampingPlaceWrapper>

    <ImageContainer>
        
    </ImageContainer>
    <CampingNameWrapper>
        <h1>{resultData.place.name}</h1>
        <LocationName>
            <p>Location</p>
            <div>{resultData.place.Location}</div>
        </LocationName>
    </CampingNameWrapper>
    <CampingDetailsWrapper>
        <CampingDetailsMiniWrapper>
            <div>
                <img src={location} alt="" />
                <p>{resultData.place.City}</p>
            </div>
            <div>
                <img src={clock} alt="" />
                <p>{resultData.place.working_hour}</p>
            </div>
        </CampingDetailsMiniWrapper>
        <CampingDetailsMiniWrapper>
           <div>
                <img src={phone} alt="" />
                <p>{resultData.place.Phone_number}</p>
            </div>
            <div>
                <img src={homepage} alt="" />
                <a href={resultData.place.home_page}>Home page</a>
            </div>
        </CampingDetailsMiniWrapper>
    </CampingDetailsWrapper>
    <DescriptionWrapper>
        <h3>Description</h3>
        <p>{resultData.place.description}</p>
    </DescriptionWrapper>
    <LocationWrapper>
    </LocationWrapper>
  
   </CampingPlaceWrapper>
  )
}

export default DetailsComponent

