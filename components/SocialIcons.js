import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaPaperPlane, FaTwitter,FaDiscord } from "react-icons/fa";
function SocialIcons() {
  return (
    <>
        <ul className='social_icons flex text-20'>
            <li><a href='javascript:()'><FaFacebookF /></a></li>
            <li><a href='javascript:()'><FaInstagram /></a></li>
            <li><a href='javascript:()'><FaYoutube /></a></li>
            <li><a href='javascript:()'><FaDiscord /></a></li>
            <li><a href='javascript:()'><FaPaperPlane /></a></li>
            <li><a href='javascript:()'><FaTwitter /></a></li>
        </ul>
    </>
  )
}
export default SocialIcons