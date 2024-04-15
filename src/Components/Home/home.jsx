import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import maincarousel1 from '../../Assets/home/maincarousel1.png'
import maincarousel2 from '../../Assets/home/maincarousel2.png'
import maincarousel3 from '../../Assets/home/maincarousel3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import NavbarComponent from '../Navbar/navbar'
// import { Carousel } from './style'

const HomeComponent = () => {
  return (
    <div>
        <NavbarComponent />
        <Carousel className='CarouselWrapper' 
        showArrows={true} 
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}>
            <div>
                <img className='CarouselImg' src={maincarousel1} alt='Img1'/>
            </div>
            <div>
                <img className='CarouselImg' src={maincarousel2} alt='Img2'/>
            </div>
            <div>
                <img className='CarouselImg' src={maincarousel3} alt='Img3'/>
            </div>
        </Carousel>
    </div>
  )
}

export default HomeComponent
