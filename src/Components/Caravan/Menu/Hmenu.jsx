import React from 'react'
import { BrandNameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from '../../Motor/Menu/Hmenustyle';
import star from "../../../Assets/star.png"
import { caravans } from '../../../MockData/caravanmock';

const HmenuComponent = () => {
    const data =caravans.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.caravan.photo || "No Data"} alt="No data" />
                </ImgWrapper>
                <InfoWrapper>
                <h2>{value.caravan.name}</h2>
                <BrandNameWrapper>
                    <div>{value.caravan.company}</div>
                    <div>
                        <img src={star} alt="" />
                        <p>{value.caravan.star}</p>
                    </div>
                </BrandNameWrapper>
                <h1>{value.caravan.cost}</h1>
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

export default HmenuComponent
