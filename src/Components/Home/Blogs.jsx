import React from 'react'
import { BlogConLeft, BlogConRight, BlogsContainer } from './style'
import Image1 from '../../Assets/home/Blogs/1.png'
import Image2 from '../../Assets/home/Blogs/2.png'
import Image3 from '../../Assets/home/Blogs/3.png'
import Image4 from '../../Assets/home/Blogs/4.png'
import Image5 from '../../Assets/home/Blogs/5.png'
import Image6 from '../../Assets/home/Blogs/6.png'

const Blogs = () => {
  return (
    <BlogsContainer>
      <BlogConLeft>
        <h1>Camper</h1>
        <h4>@camper_1</h4>
        <p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
      </BlogConLeft>
      <BlogConRight>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        <img src={Image5} alt="" />
        <img src={Image6} alt="" />
      </BlogConRight>
    </BlogsContainer>
  )
}

export default Blogs
