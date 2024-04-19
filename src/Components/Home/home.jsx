import React from 'react'
import NavbarComponent from '../Navbar/navbar'
import MainCarouselComponent from './MainCarousel'
import MultiCarouselComponent from './MultiCarusel/MultiCarousel'
import {  Header, HeaderWrapper, HomeContainer } from './style'
import Blogs from './Blogs'
import VideoContainer from './videos'

const HomeComponent = () => {
  return (
    <div>
        <NavbarComponent />
       <MainCarouselComponent />
      <HomeContainer>
      <Header>Recomended</Header>
       <MultiCarouselComponent />
       <HeaderWrapper>
       <Header $video>Videos</Header>
       </HeaderWrapper>
       <VideoContainer />
       <HeaderWrapper>
       <Header $video>Blogs</Header>
       </HeaderWrapper>
       <Blogs />
      </HomeContainer>


    </div>
  )
}

export default HomeComponent
