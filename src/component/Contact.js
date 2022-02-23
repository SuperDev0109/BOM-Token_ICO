import React from 'react'
import Image from './Image'
import contactbg from '../Images/contactbg.png';
export default function Pricing(){
      
    return(
         <>
            <div id="Contact" className='contact-section bg-contactbg py-24 hidden md:block  border-t-2 border-b-2 border-white/20 mt-16 mb-24'>
                <div class="max-w-800 mx-auto text-center mb-16">
                    <h4 className='font-sansation uppercase text-wTitle text-25 mb-4'>CONTACTS</h4>    
                    <h2 className="heading-primary">Contact informations</h2>
                    <p class="sub-heading">Investigationes demonstraverunt lectores legere elementum pulvinar etiam non quam lacus suspendisse risus nec feugiat in laoreet sit amet cursus.</p>
                </div>
                <div class="max-w-980 mx-auto">
                    <form>
                        <div className='grid-cols-2 grid gap-4'>
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="fname" name="firstname" placeholder='First Name' />  
                            </div>   
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="lastname" name="lastname" placeholder='Last Name' />  
                            </div> 
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="email" name="email" placeholder='Email' />  
                            </div> 
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="phone" name="phone" placeholder='Phone' />  
                            </div> 
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="subject" name="subject" placeholder='Subject' />  
                            </div> 
                            <div className='field-input'>
                                <input className='w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md' type="text" id="youraddress" name="youraddress" placeholder='Your Address' />  
                            </div> 
                            </div>
                            <div className='grid-cols-1 grid gap-4 mt-4'>
                            <div className='field-input'>
                                <textarea className='w-full text-20 p-2 h-198 font-poppins bg-white/20 text-white rounded-md' id="message" name="message" placeholder='Message |' ></textarea>  
                            </div> 
                            <div className='field-input'>
                            <label className='accept-btn font-poppins text-20 relative mt-3 mb-8 block' htmlfor="accept">
                                <input className='opacity-0 mr-3 w-20 h-20 relative top-0.5' type="checkbox" id="accept" name="accept" value="accept" />
                                <span className='checkmark w-20 h-20 absolute top-0.5 left-0 border border-white rounded'></span>
                               I accept the <a className='text-yelloText' href="#">Terms of Use</a> & <a className='text-yelloText' href="#">Privacy</a>.</label>
                            </div>
                            <div className='field-input yellow-btn'>
                                <input className='btn-primary' type="submit" value="Send" />      
                            </div> 
                        </div>
                    </form>
                </div>  
            </div>   
        </>
    )
 
}