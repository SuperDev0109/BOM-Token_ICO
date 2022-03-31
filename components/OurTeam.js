import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teams = [
  {
    name: "Troica",
    role: "Co-Founder",
    description:
      "Founder, CEO & CTO in several start ups, Troica is the brain behind BOM and has helped several businesses stand up strongly in a short period.",
  },
  {
    name: "Vladyslav",
    role: "Smart Contract Developer",
    description:
      "The brain behind BOMCoin – Tom has 8 Years of experience as a director and CEO in several startups and companies with a strong financial background and proven expertise.",
  },
  {
    name: "Bishal",
    role: "Graphic Designer",
    description:
      "As a Creative Graphic Designer & a Video Editor with 3+ years of experience, Bishal gives life to the visuals of the BOM project.",
  },
  {
    name: "Aniefiok",
    role: "Marketing Manager",
    description:
      "Having worked on several outstanding projects such as Web content development, Gaming Reviews, Video Scripts, Aniefiok is one of the best copywriting experts today.",
  },
];

const OurTeam = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="Our_Team">
      <div className="max-w-1400 mx-auto px-4 border-t-2 border-white/20 py-16 md:py-24">
        <div className="max-w-950 mx-auto text-center mb-16">
          <h2 className="heading-primary">Our Team</h2>
          <p className="sub-heading">
            The BOM team is an all-star group of blockchain romantics,
            Emmy-nominated game industry veterans with credits including Diablo,
            World of Warcraft and Marvel, and visionaries who are building an
            industry leading Play-to-Earn gaming experience from the ground up.
          </p>
        </div>
        <Slider className="OurTeam" {...settings}>
          {teams.map((m, i) => (
            <div key={i}>
              <div className="card-team border p-4 rounded-lg border-yellow-300">
                <div className="teamDtl">
                  <h4>{m.name}</h4>
                  <p className="pt-2 pb-8">{m.role}</p>
                  <p>{m.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
