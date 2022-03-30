import React from "react";
import TimelineLadder from "./TimelineLadder";

function Timeline() {
  const timeline = [
    {
      counter: "01",
      title: "White Paper release and  Seed investing",
      Ques: "Q4 2021",
      description:
        "With our founding documents in place, Seed investors will have the chance to fully grasp the concept of BOM, thus educated investment decisions can be made.",
    },
    {
      counter: "02",
      title: "Initial development",
      Ques: "Q1 2022",
      description:
        "After the first phase, our world-class team will commence the development of BOM’s website, Application, and Plugins, which companies can utilize to directly integrate BOM into their online platforms (compatible with most types of sites).",
    },
    {
      counter: "03",
      title: "Strategic launch",
      Ques: "Q2 2022",
      description:
        "This step will be a major milestone, as we will not only extend our professional team, but also initiate BOM’s first global marketing campaign (share-to-earn for users) that is already connected with countless businesses. Meanwhile, expanding our strategic partners, and launching the token on PancakeSwap will also be among priorities.",
    },
    {
      counter: "04",
      title: "Community building",
      Ques: "Q3 2022",
      description:
        "To get the attention and vital support of early adopters, the very first BOM Airdrops will take place, seasoned with engaging contests and giveaways to establish a rock-solid follower base.",
    },
    {
      counter: "05",
      title: "ICO & Public Token Sale",
      Ques: "Q4 2022",
      description:
        "Right before the grand launch, we will hold our Initial Coin Offering (ICO) as well as the first publicly available pre-sales. This will be a great time for our initial investors to partially cash in on their early positions.",
    },
    {
      counter: "06",
      title: "Full-blown launch",
      Ques: "Q4 2022",
      description:
        "Finally, after years of careful planning and design, BOM’s platforms will become reality and launch with all their revolutionary capabilities fully functioning. ",
    },
  ];
  return (
    <>
      <section className="py-10 pb-16 md:pb-28">
        <div className="max-w-1400 mx-auto px-5 xl:px-0">
          <h2 className="heading-primary text text-center mb-14 md:mb-20">
            20,000+ Unique NFTs
          </h2>
          <div className="timeline_ladder_wrapper hidden md:flex justify-center px-5">
            <div className="text-right md:mt-10 xl:mt-16 grid gap-y-4">
              <TimelineLadder
                TimeLinetitle={timeline[0].title}
                TimelineQues={timeline[0].Ques}
                description={timeline[0].description}
              ></TimelineLadder>

              <TimelineLadder
                TimeLinetitle={timeline[2].title}
                TimelineQues={timeline[2].Ques}
                description={timeline[2].description}
              ></TimelineLadder>

              <TimelineLadder
                TimeLinetitle={timeline[4].title}
                TimelineQues={timeline[4].Ques}
                description={timeline[4].description}
              ></TimelineLadder>
            </div>
            <div className="px-5">
              <img src={"/images/ladder.png"} />
            </div>
            <div className="text-left md:mt-44 xl:mt-80 grid gap-y-10 lg:gap-y-20">
              <TimelineLadder
                number={timeline[0].counter}
                TimeLinetitle={timeline[1].title}
                TimelineQues={timeline[1].Ques}
                description={timeline[1].description}
              ></TimelineLadder>

              <TimelineLadder
                TimeLinetitle={timeline[3].title}
                TimelineQues={timeline[3].Ques}
                description={timeline[3].description}
              ></TimelineLadder>

              <TimelineLadder
                TimeLinetitle={timeline[5].title}
                TimelineQues={timeline[5].Ques}
                description={timeline[5].description}
              ></TimelineLadder>
            </div>
          </div>

          <div className="grid md:hidden text-center gap-14">
            <TimelineLadder
              number={timeline[0].counter}
              TimeLinetitle={timeline[0].title}
              TimelineQues={timeline[0].Ques}
              description={timeline[0].description}
            ></TimelineLadder>

            <TimelineLadder
              number={timeline[1].counter}
              TimeLinetitle={timeline[1].title}
              TimelineQues={timeline[1].Ques}
              description={timeline[1].description}
            ></TimelineLadder>

            <TimelineLadder
              number={timeline[2].counter}
              TimeLinetitle={timeline[2].title}
              TimelineQues={timeline[2].Ques}
              description={timeline[2].description}
            ></TimelineLadder>

            <TimelineLadder
              number={timeline[3].counter}
              TimeLinetitle={timeline[3].title}
              TimelineQues={timeline[3].Ques}
              description={timeline[3].description}
            ></TimelineLadder>

            <TimelineLadder
              number={timeline[4].counter}
              TimeLinetitle={timeline[4].title}
              TimelineQues={timeline[4].Ques}
              description={timeline[4].description}
            ></TimelineLadder>

            <TimelineLadder
              number={timeline[5].counter}
              TimeLinetitle={timeline[5].title}
              TimelineQues={timeline[5].Ques}
              description={timeline[5].description}
            ></TimelineLadder>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
