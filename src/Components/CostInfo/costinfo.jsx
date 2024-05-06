import React from 'react'
import { ButtonWrapper, CheckBox, CompareWrapper, CostInfoWrapper,EstimatedCost, ImgContainer, NeedsContainer, Title } from './costinfostyle'
import Compare1 from '../../Assets/compare/car1.png'
import Compare2 from '../../Assets/compare/car2.png'
import Compare3 from '../../Assets/compare/car3.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
       <Accordion  defaultExpanded className='Accordion'>
        <AccordionSummary 
          className='Summary'
          expandIcon={<ExpandMoreIcon />}>
          <p>Brand</p>
        </AccordionSummary>
        <AccordionDetails className='Details'>
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
        </AccordionDetails>
      </Accordion>
       </NeedsContainer>
       <NeedsContainer>
       <Accordion  defaultExpanded className='Accordion'>
        <AccordionSummary 
          className='Summary'
          expandIcon={<ExpandMoreIcon />}>
          <p>Company</p>
        </AccordionSummary>
        <AccordionDetails className='Details'>
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
        </AccordionDetails>
      </Accordion>
       </NeedsContainer>
       <NeedsContainer>
       <Accordion  defaultExpanded className='Accordion'>
        <AccordionSummary 
          className='Summary'
          expandIcon={<ExpandMoreIcon />}>
          <p>Licence type</p>
        </AccordionSummary>
        <AccordionDetails className='Details'>
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
        </AccordionDetails>
      </Accordion>
       </NeedsContainer>
       <NeedsContainer>
       <Accordion  defaultExpanded className='Accordion'>
        <AccordionSummary 
          className='Summary'
          expandIcon={<ExpandMoreIcon />}>
          <p>Number of travelers</p>
        </AccordionSummary>
        <AccordionDetails className='Details'>
          <CheckBox>
          <div>
            <input type="checkbox" />
            <label >2 </label>
          </div>
          <div>
            <input type="checkbox" />
            <label >3~4</label>
          </div>
          <div>
            <input type="checkbox" />
            <label >5+</label>
          </div>
        </CheckBox>
        </AccordionDetails>
      </Accordion>
       </NeedsContainer>
       <NeedsContainer>
       <Accordion  defaultExpanded className='Accordion'>
        <AccordionSummary 
          className='Summary'
          expandIcon={<ExpandMoreIcon />}>
          <p>Location</p>
        </AccordionSummary>
        <AccordionDetails className='Details'>
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
        </AccordionDetails>
      </Accordion>
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
