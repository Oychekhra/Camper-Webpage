import React from 'react'
import { BrandNameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from './Hmenustyle';
import star from "../../../Assets/star.png"
import { usedCars } from '../../../MockData/usedcarmock';

const HmenuComponent = () => {
    const data =usedCars.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.car.photo || "No Data"} alt="No data" />
                </ImgWrapper>
                <InfoWrapper>
                <h2>{value.car.name}</h2>
                <BrandNameWrapper>
                    <div>{value.car.company}</div>
                    <div>
                        <img src={star} alt="" />
                        <p>{value.car.star}</p>
                    </div>
                </BrandNameWrapper>
                <h1>{value.car.cost}</h1>
                </InfoWrapper>
                <Button>
                    <button>Order</button>
                    <button>Compare</button>
                </Button>
            </CampCarWrapper>
        );
    })}
   </CampCarInfo>
  )
}

export default HmenuComponent
