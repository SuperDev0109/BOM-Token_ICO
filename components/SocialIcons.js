import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
function SocialIcons() {
  return (
    <>
      <ul className="social_icons flex text-20">
        <li>
          <a href="https://facebook.com/bomcoinofficial">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/bomcoinofficial">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://youtube.com/bomcoinofficial">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/xrtEEMmZfU">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="https://t.me/bomcoinofficial">
            <FaPaperPlane />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bomcoinofficial">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </>
  );
}
export default SocialIcons;
