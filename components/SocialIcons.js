import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaTwitter,
  FaDiscord,
  FaMedium,
  FaTelegram,
  FaDochub,
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
          <a href="https://www.instagram.com/BomCoinOfficial">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/BomCoinOfficial">
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
            <FaTelegram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bomcoinofficial">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://bomcoin.medium.com">
            <FaMedium />
          </a>
        </li>
        <li>
          <a href="https://docs.bomcoin.com">
            <FaDochub />
          </a>
        </li>
      </ul>
    </>
  );
}
export default SocialIcons;
