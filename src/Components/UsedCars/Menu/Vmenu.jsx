import React from 'react'
import { NameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from './vmenustyle';
import star from "../../../Assets/star.png"
import { usedCars } from '../../../MockData/usedcarmock';

const VmenuComponent = () => {
    const data =usedCars.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.car.photo} alt=" No data" />
                </ImgWrapper>
                <InfoWrapper>
                <NameWrapper>
                <h2>{value.car.name}</h2>
                <h1>{value.car.cost}</h1>
                </NameWrapper>
                <NameWrapper>
                    <div>{value.car.company}</div>
                    <div>
                        <img src={star} alt="" />
                        <p>{value.car.star}</p>
                    </div>
                </NameWrapper>
                <Button>
                    <button>Order</button>
                    <button>Compare</button>
                </Button>
                </InfoWrapper>
            </CampCarWrapper>
        );
    })}
   </CampCarInfo>
  )
}

export default VmenuComponent