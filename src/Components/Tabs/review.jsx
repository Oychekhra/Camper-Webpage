import React from 'react'
import scroll from '../../Assets/scrolldown.png'
import { ImgWrapper, InfoWrapper, MainCon, MiniInfoWrapperLeft, MiniInfoWrapperRight, ReviewContainer, ReviewWrapper } from './style'
import { MiniContainer, MiniSorterContainer, SorterContainer } from '../Motor/style'
import { carreview } from '../../MockData/CarReview'


const ReviewComponent = () => {
    const data =carreview.maindata;
    const slicedItems = data.slice(0, 5)
  return (
    <MainCon>
        <ReviewContainer>
            <MiniContainer>
                <p> Premium Review   <span style={{color:'blue'}}>{data.length}</span></p>
            </MiniContainer>
            <SorterContainer>
                <MiniSorterContainer $Left style={{width:'200px'}}>Best</MiniSorterContainer>
                <MiniSorterContainer $Right><img src={scroll} alt="scroll icon" /></MiniSorterContainer>
            </SorterContainer>
        </ReviewContainer>
    {slicedItems.map((value, key) =>{
        return(  
            <ReviewWrapper key={key}>
                <ImgWrapper>
                <div>
                <img src={value.car.photo} alt="" />
                </div>
                </ImgWrapper>
                <InfoWrapper>
                <MiniInfoWrapperRight>
                <h1>{value.car.name}</h1>
                <h1>{value.car.company}</h1>
                <h1 style={{fontSize:'12px', fontWeight:500}}>{value.view.comment}</h1>
                </MiniInfoWrapperRight>
                <MiniInfoWrapperLeft >
                    <p>ID: {value.id}</p>
                    <p>Date: {value.view.date}</p>
                    <p>Viewed: {value.view.viewed}</p>
                </MiniInfoWrapperLeft>
                </InfoWrapper>
            </ReviewWrapper>
        );
    })}
    </MainCon>
  )
}

export default ReviewComponent
