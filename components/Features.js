import React from 'react'

export default function Features(){
    return(
        <>
            <div id="Features" className='visionBox pt-16 md:pt-10 md:pb-32 pb-0'>
            <div className='w-full pt-10 md:block hidden'><img className='w-full' src={'/images/curve.png'}/></div> 
                <div className='px-4 max-w-1400 mx-auto flex flex-wrap items-end text-white md:-mt-60 -mt-10'>
                    <div className='flex flex-wrap gap-5 max-w-930 w-full mx-auto md:pl-16 pl-0 borderWhite5 md:border-l-8 border-l-0'> 
                      <div className='why-choose w-full relative flex flex-wrap '>                      
                         <div className='md:bg-cardbg bg-none md:px-10 py-0 md:py-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full md:gap-0 gap-5'>
                            <div className='md:w-1/2 w-full md:text-left text-center'>
                                <h3 className='mb-2 md:text-40 text-32 font-bold text-white font-sansation'>Why choose BOM?</h3>
                                <p className='md:text-20 text-16 md:leading-30 leading-20'>The question might arise: why BOM? The answer is simple: this project, thanks to its brilliantly innovative design and concept, can offer astronomical potential returns not only for early investors, but for participants, too.</p>
                            </div>
                            <div className='md:w-1/2 w-full md:pl-5 pl-0 md:mb-0 mb-7'>
                                <img className="w-full" src={'/images/card1.png'}/>
                            </div>
                         </div>                         
                      </div>
                      <div className='why-choose w-full relative flex flex-wrap'>                      
                        <div className='md:bg-cardbg bg-none md:px-10 py-0 md:py-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full md:gap-0 gap-5'>
                            <div className='md:w-1/2 w-full md:text-left text-center'>
                                <h3 className='mb-2 md:text-40 text-32 font-bold text-white font-sansation'>The need for BOM</h3>
                                <p className='md:text-20 text-16 md:leading-30 leading-20'>The world is only at the dawn of crypto projects bringing blockchain technology to traditional economies, so some experts predict seed investors of initiatives, such as BOM, could be looking at multiplying their investments potentially one hundred-fold. </p>
                            </div>
                            <div className='md:w-1/2 w-full md:pl-5 pl-0'>
                                <img className="w-full" src={ '/images/boomneed.png'}/>   
                            </div>
                         </div>                         
                      </div>
                      <div className='why-choose w-full relative flex flex-wrap'>                      
                         <div className='md:bg-cardbg bg-none md:p-7 p-0 bg-cover flex flex-wrap items-center bg-no-repeat w-full md:gap-0 gap-5'>
                            <div className='md:w-1/2 w-full md:text-left text-center'>
                                <h3 className='mb-2 md:text-40 text-32 font-bold text-white font-sansation'>Become an Early Investor</h3>
                                <p className='md:text-20 text-16 md:leading-30 leading-20'>If you’d like to become part of BOM’s success story, it’s your time to act: participate in our BOM pre-sale, and secure your share from the transaction token of the future. As mentioned before, this pre-sale is investors’ best chance of taking....</p>
                            </div>
                            <div className='md:w-1/2 w-full md:pl-5 pl-0 md:mb-0 mb-7'>
                                <img className="w-full" src={'/images/earlyinvestor.png'}/>   
                            </div>
                         </div>
                      </div>
                      <div className='why-choose w-full relative flex flex-wrap'>
                         <div className='md:bg-cardbg bg-none md:p-7 p-0 bg-cover flex flex-wrap items-center bg-no-repeat w-full md:gap-0 gap-5'>
                            <div className='md:w-1/2 w-full md:text-left text-center'>
                                <h3 className='mb-2 md:text-40 text-32 font-bold text-white font-sansation'>Features of BOM</h3>
                                <p className='md:text-20 text-16 md:leading-30 leading-20'>The real beauty of BOM’s architecture is that while it’s complex enough to handle any type of transaction at a global scale, the core mechanism can be summarized with the system’s simple, yet powerful features.</p>
                            </div>
                            <div className='md:w-1/2 w-full md:pl-5 pl-0 md:mb-0 mb-7'>
                                <img className="w-full" src={'/images/featuresboom.png'}/>   
                            </div>
                         </div>                         
                      </div>
                    </div>                   
                </div> 
            </div>        
        </>
    )
}
 