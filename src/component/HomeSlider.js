import React from 'react'
import MainSliderSlides from './MainSliderSlides'
import Slider2 from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '40px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
      }; 
    const mainslide = [
        {
            subTitle:'The Digitel Agency',
            title : 'Revolutionizing Business Transaction',
            description: 'BOM is a groundbreaking token system developed for completely disrupting the way companies transact with clients'
        },
        {
            subTitle:'The Digitel Agency',
            title : 'Revolutionizing Business Transaction',
            description: 'BOM is a groundbreaking token system developed for completely disrupting the way companies transact with clients 2'
        },
        {
            subTitle:'The Digitel Agency',
            title : 'Revolutionizing Business Transaction',
            description: 'BOM is a groundbreaking token system developed for completely disrupting the way companies transact with clients 3'
        }
    ]
  return (
    <>
        <div id="Home" className='pt-10 md:pt-36 pb-10 md:pb-20 bg-none lg:bg-headerBg bg-[length:100%_100%]'>
            <div className='max-w-1400 mx-auto px-5 xl:px-0'>
                <Slider2 className='main-slider-wrapper'  {...settings}>
                    <MainSliderSlides 
                    subhead ={mainslide[0].subTitle} slideTitle={mainslide[0].title} slideDescription={mainslide[0].description}>
                    </MainSliderSlides>

                    <MainSliderSlides 
                    subhead ={mainslide[0].subTitle} slideTitle={mainslide[1].title} slideDescription={mainslide[1].description}>
                    </MainSliderSlides>

                    <MainSliderSlides 
                    subhead ={mainslide[0].subTitle} slideTitle={mainslide[2].title} slideDescription={mainslide[2].description}>
                    </MainSliderSlides>

                </Slider2>
            </div>
        </div>
    </>
  )
}
