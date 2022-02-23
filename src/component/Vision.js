import React from 'react'
import Image from './Image'
import vision from '../Images/vision.png'
import visionIcon from '../Images/visionIcon.png'
export default function Vision(){
    return(
        <>

            <div id="Vision" className='visionBox bg-visionBg py-20 md:py-36 bg-100% bg-no-repeat'>
                <div className='max-w-1280 mx-auto'>
                    <div className='mx-0 md:-mx-4 flex flex-wrap items-end text-white'>
                        <div class="flex items-center justify-center lg:hidden w-full mb-4">
                            <Image imageName={visionIcon} alt=""></Image>
                            <h2 className="ml-2 font-sansation text-40 leading-42 font-bold">BOM’s<br/> Grand Vision</h2>
                        </div>
                        <div class="md:w-6/12 w-full">
                            <div className='px-4'><Image imageName={vision} alt={vision}></Image></div>
                        </div>
                        <div class="md:w-6/12  w-full">
                            <div className='max-w-595 text-center lg:text-left px-4'>
                                <div class="hidden lg:flex items-center">
                                    <Image imageName={visionIcon} alt=""></Image>
                                    <h2 className="ml-2 font-sansation text-40 leading-42 font-bold">BOM’s<br/> Grand Vision</h2>
                                </div>
                                <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                                <a href="" className='btn-primary inline-block mt-6'>Get Started!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}