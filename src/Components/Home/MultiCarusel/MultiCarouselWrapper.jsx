import React from 'react'
import { MiniWrapper, MultiCarouselCon } from '../style'

const MultiCarouselWrapper = (props) => {
  // const data =MultiCarousel.maindata;
  return (
    <>
    <MultiCarouselCon>
      <img src={props.img} alt="No Data" />
      <MiniWrapper>
      <p>{props.name}</p>
      <div>
        <p> Discover the Range</p>
     </div>
      <select name="" id="">
        <option value="">Choose a model</option>
      </select>
      </MiniWrapper>
    </MultiCarouselCon>
      </>
  )
}

export default MultiCarouselWrapper
