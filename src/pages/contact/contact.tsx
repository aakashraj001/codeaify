import React, { forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLink, faMailBulk, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact.css'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FaMailchimp, FaVoicemail } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';


const Contact = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <section ref={ref} className='h-[100vh] w-full pt-[12vh]'>
      <div className='max-w-[70vw] mx-auto items-center justify-center'>
        <div className=" mb-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
          <div className="col-12 text-center">
            <h2 className="text-[38px]">Get In Touch</h2>
            <p className='text-fontSecondary'>Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-[60%] text-fontSecondary">
            <form className="block aos-init aos-animate w-full" data-aos="fade-up" data-aos-delay="100">
              <div className="flex gap-[10%] flex-wrap">
                <div className="flex flex-col w-[45%]">
                  <div className="flex flex-col mb-4">
                    <label className="" htmlFor="fname">First name</label>
                    <input type="text" className="form-control w-full" id="fname" />
                  </div>
                </div>
                <div className="flex flex-col w-[45%]">
                  <div className="flex flex-col mb-4">
                    <label className="" htmlFor="lname">Last name</label>
                    <input type="text" className="form-control w-full" id="lname" />
                  </div>
                </div>
              </div>
              <div className="mb-4 flex flex-col">
                <label className="" htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-4 flex flex-col">
                <label className="" htmlFor="message">Message</label>
                <textarea name="" className="form-control h-auto" id="message" cols="30" rows="5"></textarea>
              </div>
              <button type="submit" className="p-4 text-white rounded-[50px] bg-blue-dark">Send Message</button>
            </form>
          </div>
          <div className="flex max-w-[33%] flex-col ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-sans text-xl mb-4">Contact Info</h3>
            <div className='flex items-center mb-4'>
              <FontAwesomeIcon className="text-gray-darkest" icon={faAddressCard} /><span className="mt-1 icon-room mr-2"></span><span>43 Raymouth Rd. Baltemoer, London 3910</span>
            </div>
            <ul className="list-unstyled ul-links mb-4">
              <li className='flex items-center mb-4'>
                <FontAwesomeIcon className="text-gray-darkest" icon={faPhone} /><li className=''><a href="tel://11234567890" className="flex"><span className="mt-1 icon-phone mr-2"></span><span>+1(123)-456-7890</span></a></li>
              </li>
              <li className='flex items-center mb-4' >
                <FontAwesomeIcon className="text-gray-darkest" icon={faPhone} /> <li className=' '><a href="tel://11234567890" className="flex"><span className="mt-1 icon-phone mr-2"></span><span>+1(123)-456-7890</span></a></li>
              </li>
              <li className='flex items-center mb-4'>
                <FontAwesomeIcon className="text-gray-darkest" icon={faLink} /><li className=''><a href="mailto:info@mydomain.com" className="flex"><span className="mt-1 icon-envelope mr-2"></span><span>info@mydomain.com</span></a></li>
              </li>
              <li className='flex items-center mb-4'>
                <FontAwesomeIcon className="text-gray-darkest" icon={faMailBulk} /><li className=''><a href="#" target="_blank" className="flex"><span className="mt-1 icon-globe mr-2"></span><span>https://codeaify.com/</span></a></li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
});

export default Contact;
