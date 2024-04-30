import React from 'react'
import { ButtonWrapper, CheckBox, CompareWrapper, CostInfoWrapper,EstimatedCost, ImgContainer, NeedsContainer, Title } from './costinfostyle'
import scroll from '../../Assets/scrolldown.png'
import Compare1 from '../../Assets/compare/car1.png'
import Compare2 from '../../Assets/compare/car2.png'
import Compare3 from '../../Assets/compare/car3.png'

const CostInfoContainer = () => {
  return (
    <CostInfoWrapper>
       <NeedsContainer>
        <Title>
          <p>Cost of car</p>
        </Title>
        <EstimatedCost>
            <div>
                <label >from</label>
                <input type="text" />
            </div>
            <div>
                <label >to</label>
                <input type="text" />
            </div>
        </EstimatedCost>
       </NeedsContainer>
       <NeedsContainer>
        <Title>
          <p>Brand</p>
          <img src={scroll} alt="Scrool icon" />
        </Title>
        <CheckBox>
          <div>
            <input type="checkbox" />
            <label >Aidal</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >Knal</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >Escape</label>
          </div>
        </CheckBox>
       </NeedsContainer>
       <NeedsContainer>
        <Title>
          <p>Company</p>
          <img src={scroll} alt="Scrool icon" />
        </Title>
        <CheckBox>
          <div>
            <input type="checkbox" />
            <label >Escape</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >Aidal</label>
          </div>
        </CheckBox>
       </NeedsContainer>
       <NeedsContainer>
        <Title>
          <p>Licence type</p>
          <img src={scroll} alt="Scrool icon" />
        </Title>
        <CheckBox>
          <div>
            <input type="checkbox" />
            <label >1 year</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >2 year</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >1.5 year</label>
          </div>
        </CheckBox>
       </NeedsContainer>
       <NeedsContainer>
        <Title>
          <p>Number of travelers</p>
          <img src={scroll} alt="Scrool icon" />
        </Title>
        <CheckBox>
          <div>
            <input type="checkbox" />
            <label >2</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >3-4</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >5+</label>
          </div>
        </CheckBox>
       </NeedsContainer>
       <NeedsContainer>
        <Title>
          <p>Location</p>
          <img src={scroll} alt="Scrool icon" />
        </Title>
        <CheckBox>
          <div>
            <input type="checkbox" />
            <label >Seoul</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >Busan</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >Korea</label>
          </div>
        </CheckBox>
       </NeedsContainer>
       <ButtonWrapper>
        <button>Cancel</button>
        <button >Search</button>
       </ButtonWrapper>
       <CompareWrapper>
        <div>
          <p>Compare</p>
        </div>
        <ImgContainer>
          <div>
            <img src={Compare1} alt="Camp Img" />
          </div>
          <div>
            <img src={Compare2} alt="Camp Img" />
          </div>
          <div>
            <img src={Compare3} alt="Camp Img" />
          </div>
        </ImgContainer>
       </CompareWrapper>
    </CostInfoWrapper>
  )
}

export default CostInfoContainer
