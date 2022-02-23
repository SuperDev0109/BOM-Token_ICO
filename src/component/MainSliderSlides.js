import React from 'react'
import Image from './Image'
import mainSlider from '../Images/mainsSlider.png' 
import LogoIcon from '../Images/slider-logo-icon.png'
import Button from './Button'
import SocialIcons from './SocialIcons'

function MainSliderSlides(props) {
  return (
    <>
        <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-start itmes-center lg:items-end'>
            <div className='w-full md:w-7/12'>
                <div className='w-full text-center md:text-left max-w-full md:max-w-2xl mb-4 md:pb-20'>
                    <h3 className='flex text-16 sm:text-20 items-center justify-center md:justify-start mb-2 tracking-3 text-primary'>{props.subhead} 
                        <Image imageName={LogoIcon} className="w-6 h-6 object-contain"></Image>
                    </h3>
                    <h2 className='font-sansation text-27 md:text-60 leading-tight sm:leading-70 font-bold text-center md:text-left mx-auto md:mx-0 max-w-xl mb-2'>{props.slideTitle}</h2>
                    <p className='text:16 sm:text-20'>{props.slideDescription}</p>
                    <div className='slide_buttons_Wrapper flex items-center justify-center md:justify-start mt-8 md:mt-16'>
                        <Button ButtonTitle="Get Started!" />
                        <Button ButtonTitle="Whitepaper" />
                       <SocialIcons></SocialIcons>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-5/12'>
                <Image imageName={mainSlider} className="mx-auto"></Image>
            </div>
        </div>
    </>
  )
}

export default MainSliderSlides