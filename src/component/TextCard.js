import React from "react";

export default function TextCard(props){
	return(
		<>
			<div className="text-center md:text-left">
				<h2 className="text-38 font-bold font-sansation py-5">{props.heading}</h2>
				<img className="max-w-full block mx-auto md:mx-0" src={props.imageName} />
				<p className="text-20 leading-30 py-5">{props.description}</p>
			</div>
		</>
	)

	
}