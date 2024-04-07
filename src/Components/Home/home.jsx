import React from 'react'
import {campcar} from '../mock/mockdata'
import { Button, CampCarInfo, CampCarWrapper, ContainerWrapper, HomeContainer, InfoWrapper, LeftInfoWrapper, RightInfoWrapper, RightTopCon } from './style'
import background from '../../Assets/Home.png'
import Scroll from '../../Assets/scroll2.png'
import Compare1 from '../../Assets/car1.png'
import Compare2 from '../../Assets/car2.png'
import Compare3 from '../../Assets/car3.png'
import star from "../../Assets/star.png"
import windows from '../../Assets/windowIcon.png'
import menu from '../../Assets/viewlist.png'

const HomeComponent = () => {
    const data =campcar.maindata;
  return (
    <div style={{background:'#FAFAFA'}}>
        <HomeContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Motors</p>
            <p style={{fontSize:'27px', fontWeight:700}} >Our Ranges</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Motors</p>
        </HomeContainer>
        <InfoWrapper>
            <LeftInfoWrapper>
                <div className='Topic'>
                <p>Cost of car</p>
                </div>
                <div className='Cost'>
                   <div>
                   <label>from</label>
                    <input type="text" />
                   </div>
                   <div>
                   <label>to</label>
                    <input type="text" />
                   </div>
                </div>
                <div className='Topic'>
                    <p>Brand</p>
                    <img src={Scroll} alt="" />
                </div>
                <div className='Checkbox'>
                    <div >
                        <input type="checkbox" />
                        <label>Aidal</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Knal</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Escape</label>
                    </div>
                </div>
                <div className='Topic'>
                    <p>Company</p>
                    <img src={Scroll} alt="" />
                </div>
                <div className='Checkbox'>
                    <div >
                        <input type="checkbox" />
                        <label>Escape</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Aidal</label>
                    </div>
                </div>
                <div className='Topic'>
                    <p>Licence type</p>
                    <img src={Scroll} alt="" />
                </div>
                <div className='Checkbox'>
                    <div >
                        <input type="checkbox" />
                        <label>1 year</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>2year</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>1.5 year</label>
                    </div>
                </div>
                <div className='Topic'>
                    <p>Number of travelers</p>
                    <img src={Scroll} alt="" />
                </div>
                <div className='Checkbox'>
                    <div >
                        <input type="checkbox" />
                        <label>2</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>3-4</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>5+</label>
                    </div>
                </div>
                <div className='Topic'>
                    <p>Location</p>
                    <img src={Scroll} alt="" />
                </div>
                <div className='Checkbox'>
                    <div >
                        <input type="checkbox" />
                        <label>Seoul</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Korea</label>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Busan</label>
                    </div>
                </div>
                <div className='Button'>
                    <button $primary>Cancel</button>
                    <button style={{backgroundColor:'blue'}}>Search</button>
                </div>
                <div className='Compare'>
                    <div style={{color:'var(--blue, #006DAB)', fontSize:'14px',fontWeight:'600'}}>Compare</div>
                    <div className='CompareImg'>
                        <div className='Img'><img src={Compare1} alt="" /></div>
                        <div className='Img'><img src={Compare2} alt="" /></div>
                        <div className='Img'><img src={Compare3} alt="" /></div>
                    </div>
                </div>
            </LeftInfoWrapper>
            <RightInfoWrapper>
               <RightTopCon>
                <ContainerWrapper className='Left'>
                    <div>Item  <span style={{color:'blue'}}>{data.length}</span></div>
                    <div className='Sorter'>
                        <p>Sort by</p>
                        <select name="" id="">
                            <option value="">Select</option>
                        </select>
                    </div>
                </ContainerWrapper>
                <ContainerWrapper className='Right' style={{justifyContent:'end'}}>
                    <div className='Sorter2'>
                        <select name="" id="">
                            <option value="">60</option>
                        </select>
                    </div>
                    <div className='Sorter3'>
                        <div className='Img1'><img src={windows} alt="" /></div>
                        <div className='Img2'><img src={menu} alt="" /></div>
                    </div>
                </ContainerWrapper>
               </RightTopCon>
               <CampCarInfo>
                {data.map((value, key) =>{
                    return(
                        <CampCarWrapper key={key}>
                            <img src={value.car.photo || "No Data"} alt="" />
                            <h2>{value.car.name}</h2>
                            <div className='Brand'>
                                <div>{value.car.company}</div>
                                <div>
                                    <img src={star} alt="" />
                                    <p>{value.car.star}</p>
                                </div>
                            </div>
                            <h1>{value.car.cost}</h1>
                            <Button>
                                <button>Order</button>
                                <button className='button1'>Compare</button>
                                <button className='button2'>View Detail</button>
                            </Button>
                        </CampCarWrapper>
                    );
                })}
               </CampCarInfo>
            </RightInfoWrapper>
        </InfoWrapper>
    </div>
  )
}

export default HomeComponent
