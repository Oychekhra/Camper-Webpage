import React from 'react'
import { NameWrapper, Button, CampCarInfo, CampCarWrapper, ImgWrapper, InfoWrapper } from './vmenustyle';
import star from "../../../Assets/star.png"
import { campcar } from '../../../MockData/motormock';
import { Link } from 'react-router-dom';

const VmenuComponent = () => {
    const data =campcar.maindata;
  return (
    <CampCarInfo>
    {data.map((value, key) =>{
        return(
            <Link to={`${value.id}`} style={{textDecorationLine:'none',width:'100%'}}>
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
            </Link>
        );
    })}
   </CampCarInfo>
  )
}

export default VmenuComponent