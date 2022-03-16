import React from 'react'

export default function PrivateSales(){
    return(
        <>
            <div id="Roadmap" className='visionBox py-16 md:py-36 bg-cover bg-no-repeat'>
            <div className="max-w-760 mx-auto text-center mb-16">
                <h2 className="heading-primary">Private Sales</h2>
                <p className="sub-heading">Our Non-Fungible Tokens will function as the licenses to use BOM. Each company who intends to participate will have to acquire their own NFT.</p>
            </div>
                <div className='container max-w-1400 grid md:grid-cols-2 grid-cols-1 justify-center md:gap-10 gap-20 mx-auto flex-wrap items-end text-white px-4'>
                    <div className="cols-2 md:text-left text-center">
                        <div className='md:-mt-2 mt-0'>
                            <img src={'/images/nftsale.png'}/>
                            <h3 className='md:text-40 text-32 font-bold font-sansation m-0 pb-1 pt-4'>NFT Sale</h3>
                            <p className='md:text-20 text-16 md:leading-30 leading-6 mt-1 mb-6'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit.</p>
                            <a href="" className='btn-primary inline-block'>Get Started!</a>
                        </div>
                    </div>
                    <div className="cols-2 md:text-left text-center">
                        <div className='md:-mt-2 mt-0'>
                            <img src={'/images/tokensale.png'}/>
                            <h3 className='md:text-40 text-32 font-bold font-sansation m-0 pb-1 pt-4'>Token Sale</h3>
                            <p className='md:text-20 text-16 md:leading-30 leading-6 mt-1 mb-6'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit.</p>

                            <a href="" className='btn-primary inline-block'>Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}
