import React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../../../MockData/motormock';
import { Button, CarDetails, CarDetailsBottomContainer, CarDetailsBottomContainerImg, CarDetailsBottomContainerInfo, CarDetailsContainer, CarDetailsTopContainer, DetailsWrapper, Header, ImageWrapper, Info } from './style';
import ItemTabs from '../../Tabs/tabcontainer';

const CarDetailsComponent = () => {
    let {id} = useParams();
    const resultData =campcar.maindata.find(
        (value) => value.id === parseInt(id)
    );
  return (
   <CarDetailsContainer>
    <CarDetailsTopContainer>
     <p>{resultData.car.name}</p>
    <Button>
      <button>Order</button>
      <button>Compare</button>
    </Button>
   </CarDetailsTopContainer>
   <div>
   <CarDetails>
    <ImageWrapper>
      <img src={resultData.car.photo} alt="" />
    </ImageWrapper>
    <DetailsWrapper>
     <Header>
     <h1 style={{fontSize:'25px', color:'black'}}>{resultData.car.name}</h1>
     <h1 >{resultData.car.cost}</h1>
      </Header> 
      <Info>
        <p>Company</p>
        <p style={{color:' rgba(55, 55, 55, 0.80)',}}>{resultData.car.company}</p>
      </Info>
      <Info>
        <p>People</p>
        <p style={{color:' rgba(55, 55, 55, 0.80)'}}>{resultData.car.people}</p>
      </Info>
      <Info>
        <p>Licience Type</p>
        <p style={{color:' rgba(55, 55, 55, 0.80)'}}>{resultData.car.license}</p>
      </Info>
    </DetailsWrapper>
   </CarDetails>
   <CarDetailsBottomContainer>
   <CarDetailsBottomContainerImg  $Top>
      <img src={resultData.details.photo2} alt="" />
    </CarDetailsBottomContainerImg>
    <CarDetailsBottomContainerInfo>
      <h1>Comfort</h1>
      <p>{resultData.details.comfort}</p>
    </CarDetailsBottomContainerInfo>
    <CarDetailsBottomContainerImg $Bottom>
      <img src={resultData.details.photo2} alt="" />
    </CarDetailsBottomContainerImg>
   </CarDetailsBottomContainer>
   <CarDetailsBottomContainer>
   <CarDetailsBottomContainerImg>
      <img src={resultData.details.photo3} alt="" />
    </CarDetailsBottomContainerImg>
    <CarDetailsBottomContainerInfo>
      <h1>Tidying away is child’s play!</h1>
      <p>{resultData.details.tidiness}</p>
    </CarDetailsBottomContainerInfo>
   </CarDetailsBottomContainer>
   <CarDetailsBottomContainer>
   <CarDetailsBottomContainerImg $Top>
      <img src={resultData.details.photo4} alt="" />
    </CarDetailsBottomContainerImg>
    <CarDetailsBottomContainerInfo>
      <h1>Ventilated , Lit up</h1>
      <p>{resultData.details.ventilation}</p>
    </CarDetailsBottomContainerInfo>
    <CarDetailsBottomContainerImg $Bottom>
      <img src={resultData.details.photo4} alt="" />
    </CarDetailsBottomContainerImg>
   </CarDetailsBottomContainer>
   <CarDetailsBottomContainer>
   <CarDetailsBottomContainerImg>
      <img src={resultData.details.photo6} alt="" />
    </CarDetailsBottomContainerImg>
    <CarDetailsBottomContainerInfo>
      <h1>Easy Access</h1>
      <p>{resultData.details.easeOfAccess}</p>
    </CarDetailsBottomContainerInfo>
   </CarDetailsBottomContainer>
   <CarDetailsBottomContainer>
   <CarDetailsBottomContainerImg $Top>
      <img src={resultData.details.photo5} alt="" />
    </CarDetailsBottomContainerImg>
    <CarDetailsBottomContainerInfo>
      <h1>Temperature</h1>
      <p>{resultData.details.temperature}</p>
    </CarDetailsBottomContainerInfo>
    <CarDetailsBottomContainerImg $Bottom>
      <img src={resultData.details.photo5} alt="" />
    </CarDetailsBottomContainerImg>
   </CarDetailsBottomContainer>
   <ItemTabs />
   </div>
   </CarDetailsContainer>

  )
}

export default CarDetailsComponent
