import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
    return ( 
        <>
        <div className="Our_Team">
            <div className="max-w-1400 mx-auto px-4 border-t-2 border-white/20 py-16 md:py-24">
                <div class="max-w-950 mx-auto text-center mb-16">
                    <h2 className="heading-primary">Our Team</h2>
                    <p class="sub-heading">The BOM team is an all-star group of blockchain romantics, Emmy-nominated game industry veterans with credits including Diablo, World of Warcraft and Marvel, and visionaries who are building an industry leading Play-to-Earn gaming experience from the ground up.</p>
                </div>

                <Slider className='OurTeam' {...settings}>
                    <div>
                        <div class="card-team">
                            <img src={'/images/Brian-1.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Lucien Dorman</h4>
                                <p>Program Director</p>
                            </div>
                        </div>
                    </div>
                   <div>
                        <div class="card-team">
                            <img src={'/images/Brian-2.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Brian Thex</h4>
                                <p>Game Development</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card-team">
                            <img src={'/images/Brian-3.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Frederick Whichello</h4>
                                <p>Game Algorithm & Mathematics</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card-team">
                        <img src={'/images/Brian-4.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Roy Hui</h4>
                                <p>Chief Technical Advisor</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card-team">
                            <img src={'/images/Brian-1.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Lucien Dorman</h4>
                                <p>Program Director</p>
                            </div>
                        </div>
                    </div>
                   <div>
                        <div class="card-team">
                            <img src={'/images/Brian-2.png'} alt="" />
                            <div className="teamDtl">
                                <h4>Brian Thex</h4>
                                <p>Game Development</p>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        </div>
        </>
     );
}
 
export default OurTeam;