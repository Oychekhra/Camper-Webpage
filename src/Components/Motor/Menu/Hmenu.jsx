import React from 'react'
import { BrandNameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from './Hmenustyle';
import star from "../../../Assets/star.png"
import { campcar } from '../../../MockData/motormock';
import { Link } from 'react-router-dom';

const HmenuComponent = () => {
    const data =campcar.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <Link to={`${value.id}`} style={{textDecorationLine:'none'}}>
            <CampCarWrapper key={key}>
                <ImgWrapper>
                <img src={value.car.photo || "No Data"} alt="" />
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
                <h1>{value.car.cost}  Won</h1>
                </InfoWrapper>
                <Button>
                    <button>Order</button>
                    <button>Compare</button>
                </Button>
            </CampCarWrapper>
            </Link>
        );
    })}
   </CampCarInfo>
  )
}

export default HmenuComponent
