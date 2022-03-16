import React from 'react'

function TimelineLadder(props) {
  return (
    <>
    <div className='max-w-450 mx-auto md:mx-0 h-auto'>
        <div className='flex md:hidden w-80 h-80 bg-wTitle text-32 font-bold mx-auto rounded-full items-center justify-center underline'>
        <span class="relative inline-block">{props.number}</span>
        </div>
        <h3 className=' text-wTitle font-bold md:text-14 lg:text-22 my-3 md:my-0'>{props.TimeLinetitle}</h3>
        <span className='my-2 lg:my-3 md:text-14 lg:text-25  bgGradient inline-block font-bold py-2 px-5 rounded-10 text-black'>{props.TimelineQues}</span>
        <p className='md:text-14 lg:text-20'>{props.description}</p>
    </div>
    </>
  )
}

export default TimelineLadder