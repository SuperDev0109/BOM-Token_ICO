import React from "react";

export default function SecureBlockchain() {
	return (
		<>		
			<div className="Secure_blockchain pt-10 md:pt-16 pb-12 md:pb-24">
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-10 max-w-1400 mx-auto border-b-2  border-white/20 pb-14 md:pb-32 px-4 flex-col-reverse md:flex-row">
					<div className="blockchain_image flex flex-wrap justify-center w-full order-2 md:order-1">
						<div><img className="" src={"/images/bom.png"}/></div>
					</div>
					<div className="blockchain_image flex flex-wrap justify-start flex-col w-full order-1 md:order-2 md:text-left text-center">
						<div className="flex justify-center md:justify-start"><img className="" src={"/images/secure.png"}/> </div>
						<h3 className="text-40 font-bold font-sansation m-0 pb-5 pt-8 leading-40 p">
							Secure, blockchain-based ecosystem</h3>
						<p className="text-20 max-w-500">Built on one of the world’s most robust blockchains, Binance Smart Chain (BSC), BOM is secured by the safety measures trusted by millions globally. This system provides trusted, bulletproof security to every BOM participant. </p>
					</div>
				</div>

			</div>
		</>
	)
}