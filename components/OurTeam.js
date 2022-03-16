import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teams = [
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
    {
        name: "Troica",
        role: "Co-founder",
        description: "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise in fuelling growth with his strong vision and business acumen. He manages and plans ahead for the overall progression of BOMCoin"
    }, 
]

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
        <div className="Our_Team">
            <div className="max-w-1400 mx-auto px-4 border-t-2 border-white/20 py-16 md:py-24">
                <div className="max-w-950 mx-auto text-center mb-16">
                    <h2 className="heading-primary">Our Team</h2>
                    <p className="sub-heading">The BOM team is an all-star group of blockchain romantics, Emmy-nominated game industry veterans with credits including Diablo, World of Warcraft and Marvel, and visionaries who are building an industry leading Play-to-Earn gaming experience from the ground up.</p>
                </div>
                <Slider className='OurTeam' {...settings}>
                    {
                        teams.map((m, i)=>
                            <div key={i}>
                                <div className="card-team border p-4 rounded-lg border-yellow-300">
                                    <div className="teamDtl">
                                        <h4>{m.name}</h4>
                                        <p className="pt-2 pb-8">{m.role}</p>
                                        <p>{m.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
     );
}

export default OurTeam;