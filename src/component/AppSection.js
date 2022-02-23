import React from "react";
import Image from './Image'
import appImage from '../Images/appImage.png'
import playStore from '../Images/playStore.png'
import appStore from '../Images/appStore.png'

export default function AppSection(){
	return(
		<>
		<div className="appSection mb-26 pb-24 bg-none md:bg-appImage bg-contain bg-right bg-no-repeat">
		 <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-1400 mx-auto border-b-1 border-white/20 px-4  md:text-left text-center">
			 <div className="">
			<h3 className="text-40 font-sansation mb-5 font-bold">Meet the BOM App</h3>
			<p className="text-16 md:text-25 font-bold max-w-750">With our groundbreaking application, clients will not only be able to buy, and sell BOM tokens, and their Business Licenses, but also can choose to share the postings from BOM’s marketing team to their own social accounts in return for various rewards.</p>
			<div className="buttons flex md:justify-start justify-center gap-4 mt-7">
			<Image className="w-25" imageName={playStore} alt={playStore}></Image>
			<Image className="w-25" imageName={appStore} alt={appStore}></Image>
			</div>
			 </div>

			 <div className="">
			 <Image className="w-auto mx-auto" imageName={appImage} alt={appImage}></Image>  
			 </div>
			</div>
		</div>
		</>
	)

	
}