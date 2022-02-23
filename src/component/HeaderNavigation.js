import React from 'react'
import Button from './Button'

function HeaderNavigation() {
  return (
    <>
    <nav className='flex justify-end items-center'>
      <ul className="header_navigation font-roboto text-20 flex justify-end">
          <li><a className='cursor-pointer hover:text-blMenu'>Home</a>
          </li>
          <li><a className='cursor-pointer hover:text-blMenu'>About</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>Vision</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>Services</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>Features</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>RoadMap</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>Tokenmics</a></li>
          <li><a className='cursor-pointer hover:text-blMenu'>FAQ</a></li>
      </ul>
      
      <Button ButtonTitle="Contact Us" />
      
    </nav>
    </>
  )
}

export default HeaderNavigation