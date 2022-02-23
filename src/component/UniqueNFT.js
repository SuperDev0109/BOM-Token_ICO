import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nft from '../Images/nft.png';
import nft1 from '../Images/nft2.png';
import nft2 from '../Images/nft3.png';

export default function UniqueNFT(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
   return(
        <>
        <div id="Services" className='uniqueNFT py-24 md:py-32'>
            <div class="max-w-760 mx-auto text-center mb-16">
                <h2 className="heading-primary">20,000+ Unique NFTs</h2>
                <p class="sub-heading">Our Non-Fungible Tokens will function as the licenses to use BOM. Each company who intends to participate will have to acquire their own NFT.</p>
                <a className='btn-primary inline-block'>Get Started!</a>
            </div>
            <div class="max-w-1280 mx-auto">
                <Slider className='slickNft' {...settings}>
                    <div>
                        <div class="card-nft">
                            <img src={nft} /> 
                        </div>
                    </div>
                    <div>
                        <div class="card-nft">
                            <img src={nft1} /> 
                        </div>
                    </div>
                    <div>
                        <div class="card-nft">
                            <img src={nft2} alt="" /> 
                        </div>
                    </div>
                    <div>
                        <div class="card-nft">
                            <img src={nft} /> 
                        </div>
                    </div>
                    <div>
                        <div class="card-nft">
                            <img src={nft1} /> 
                        </div>
                    </div>
                    <div>
                        <div class="card-nft">
                            <img src={nft2} /> 
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        
        </>
    )

}