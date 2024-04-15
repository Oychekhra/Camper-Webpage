import React from 'react'
import { NameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from './vmenustyle';
import star from "../../../Assets/star.png"
import { campcar } from '../mock/mockdata';

const VmenuComponent = () => {
    const data =campcar.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.car.photo || "No Data"} alt="" />
                </ImgWrapper>
                <InfoWrapper>
                <NameWrapper>
                <h2>{value.car.name}</h2>
                <h1>{value.car.cost}  Won</h1>
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