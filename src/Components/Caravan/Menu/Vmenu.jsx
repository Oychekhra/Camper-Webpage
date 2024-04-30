import React from 'react'
import { NameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from '../../Motor/Menu/vmenustyle';
import star from "../../../Assets/star.png"
import { caravans } from '../../../MockData/caravanmock';

const VmenuComponent = () => {
    const data =caravans.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.caravan.photo} alt=" No data" />
                </ImgWrapper>
                <InfoWrapper>
                <NameWrapper>
                <h2>{value.caravan.name}</h2>
                <h1>{value.caravan.cost}</h1>
                </NameWrapper>
                <NameWrapper>
                    <div>{value.caravan.company}</div>
                    <div>
                        <img src={star} alt="" />
                        <p>{value.caravan.star}</p>
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