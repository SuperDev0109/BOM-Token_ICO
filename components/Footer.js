import {React, useState} from 'react'
import { FaRegPaperPlane, FaArrowUp } from 'react-icons/fa';

import SocialIcons from './SocialIcons';

const FooterBox = () => {

    
  const [visible, setVisible] = useState(false)
  
  const onVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    if (typeof window === 'object') {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }    
  };
  
  if (typeof window === 'object') {
    window.addEventListener('scroll', onVisible);
  }
    return ( 
        <>
 <button onClick={scrollToTop} className={visible ? 'inline fixed bottom-6 right-6 bg-blMenu hover:bg-black text-white w-50 h-50 rounded-full':'none'}>
    <FaArrowUp />
</button>
        
        <footer className='footer py-12 md:py-20 bg-ftr_bg bg-no-repeat bg-center md:px-4'>
            <div className='max-w-1400 mx-auto'>
                <div className='footerTop'>
                    <div className='ftrLogos flex items-center justify-center mb-5'>
                        <img src={'/images/ftr_logo.png'}/>
                        <img src={'/images/ftr_logo_bom.png'}/>
                    </div>
                    <div className='socialIcon flex justify-center'>
                        <SocialIcons/>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 py-10 lg:py-20 mx-0 lg:-mx-4 '>
                    <div className='footerWidget'>
                        <div className='lg:text-left text-center px-4'>
                            <h3 className='widgetTitle capitalize text-wTitle underline font-semibold font-poppins text-20 mb-4'>Company</h3>
                            <ul>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>About</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Customers</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Enterprise</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Partners</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Jobs</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Blogs</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Newsroom</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>session</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerWidget'>
                        <div className='lg:text-left text-center px-4'>
                            <h3 className='widgetTitle capitalize text-wTitle underline font-semibold font-poppins text-20 mb-4'>Quick Links</h3>
                            <ul>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>What Is ICO</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Token</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Road Map</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Advisor</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>ICO Apps</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>White Papers</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Teams</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Join Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerWidget'>
                        <div className='lg:text-left text-center px-4'>
                            <h3 className='widgetTitle capitalize text-wTitle underline font-semibold font-poppins text-20 mb-4'>Help Links</h3>
                            <ul>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Support</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Contact</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Guides</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Privacy & Terms</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Licenses</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>COVID 19</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Sitemap</a></li>
                                <li><a href='javascript:()' className='font-poppins text-16 text-white leading-26 lg:leading-36 font-normal capitalize hover:text-wTitle'>Cookie settings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerWidget'>
                        <div className='lg:text-left text-center px-4'>
                            <h3 className='widgetTitle capitalize text-wTitle underline font-semibold font-poppins text-20 mb-4'>Stay in touch</h3>
                            <p className="font-poppins text-16 font-light leading-24">Join our mailing list to get updates.We respect your privacy.</p>
                            <form className='relative mt-6'>
                                <input type="text" name='newsLetter' placeholder='Email Address' className='focus-visible:none w-full h-80 rounded-full px-6 font-poppins text-20 font-normal text-black'/>
                                <button type='submit' className='bgGradient h-60 w-60 rounded-full text-black text-20 justify-center items-center absolute top-10px right-10px'><FaRegPaperPlane /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='footerBottom lg:border-t lg:border-white/10 lg:pt-10'>
                    <div className='flex flex-wrap lg:flex-nowrap  justify-center lg:justify-between px-4 mx-0 lg:-mx-4'>
                        <div className="copyright text-poppins text-center md:text-left"><span className='font-normal'>Copyright © 2022</span> <span className='font-bold'>. All Rights Reserved by <a href="javascript:()" className='text-wTitle'>BOM</a>.</span> </div>
                        <div className='lg:block hidden'><SocialIcons /></div>
                    </div>
                </div>
            </div>
        </footer>

        
        </>
     );
}
 
export default FooterBox;