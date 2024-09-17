import React, { forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import riaz from '../../assets/images/riaz.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import about from '../../assets/images/aboutus.png'
import './about.css'

const About = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <section ref={ref} className='h-[100vh] w-full pt-[12vh]'>
      <div className='max-w-[70vw] mx-auto items-center gap-10 flex flex-row'>
        <div className='flex justify-between items-center'>
          <div className="w-[60%] aos-init aos-animate " data-aos="fade-up" data-aos-delay="400">
              <img src={about} alt="Image" className="w-full h-auto object-fill flex " />
          </div>
          <div className='w-[33%] flex flex-col'>
            <div className='mb-6'>
              <span className='font-[700] text-[14px] text-[#407BFF]'>About</span>
              <h3 className='font-[600] text-[34px] '>About Us</h3>
            </div>
            <div className="mb-6">
              <div className="mb-6 aos-init aos-animate text-fontSecondary" data-aos="fade-up" data-aos-delay="100">
                <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                <p>Separated they <span className="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
              <ul className="text-fontSecondary font-[500] flex flex-col gap-1">
                <div className='flex items-center gap-4'><FontAwesomeIcon color='#407BFF' icon={faCheck} /><li>There live the blind texts</li></div>
                <div className='flex items-center gap-4'><FontAwesomeIcon color='#407BFF' icon={faCheck} /><li>Far far away behind the word</li></div>
                <div className='flex items-center gap-4'><FontAwesomeIcon color='#407BFF' icon={faCheck} /><li>Their place and supplies</li></div>
              </ul>
            </div>
            <div className="flex flex-wrap count-numbers">
              <div className="flex flex-col w-[50%] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                <span className="block text-[40px]"><span data-number="59">59</span><span>M</span></span>
                <span className="caption-2 text-fontSecondary">Members</span>
              </div>
              <div className="flex flex-col w-[50%] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <span className="block text-[40px]"><span data-number="14">14</span><span></span></span>
                <span className="caption-2 text-fontSecondary">Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
