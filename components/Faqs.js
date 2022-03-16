import React from "react";

const Faqs = () => {
    return ( 
        <>
            <div id="FAQ" className="max-w-1400 mx-auto py-20 border-b border-white/10 md:px-0 px-4 border-t-2 border-b-2 border-white/20">
                <div className="max-w-750 mx-auto text-center mb-16">
                    <h2 className="heading-primary">FAQ</h2>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-6">
                    <div className="cols">
                        <div className="FaqBlock bg-grayBlack px-8 lg:px-12 py-12 lg:py-16 rounded-20 lg:text-left text-center">
                            <h4 className="text-wTitle text-25 font-bold mb-2 font-sansation">What is BOM Token?</h4>
                            <p className="text-20 leading-30">BOM is the revolutionary transaction token of the ecosystem that aims to completely transform the way the world thinks about online business. </p>
                        </div>
                    </div>
                    <div className="cols">
                        <div className="FaqBlock bg-grayBlack px-8 lg:px-12 py-12 lg:py-16 rounded-20 lg:text-left text-center">
                            <h4 className="text-wTitle text-25 font-bold mb-2 font-sansation">How to buy Bom token?</h4>
                            <p className="text-20 leading-30">Anyone can buy BOM during our token seed investment round. It is anticipated that early investors will reap the benefits of their positions in a year’s time at the latest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Faqs;