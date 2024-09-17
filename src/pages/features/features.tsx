import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import riaz from '../../assets/images/riaz.png'


const Feature = React.forwardRef((props, ref) => (
    <section ref={ref} className='h-[100vh] w-full pt-[18vh]'>
        <div className='max-w-[70vw] mx-auto items-center gap-10 flex flex-row' >
            <div className='flex justify-between'>
                <div className='w-[33%] flex flex-col'>
                    <div className='mb-6'>
                        <span className='font-[700] text-[14px] text-[#407BFF]'>DIGITAL SERVICE</span>
                        <h3 className='font-[600] text-[34px] '>PROTECT YOUR PRIVACY</h3>
                    </div>
                    <div className="mb-6">
                        <p className='mb-4 text-fontSecondary font-[500]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                        <ul className="text-fontSecondary font-[500]">
                            <div className='flex items-center gap-4'><FontAwesomeIcon color='#407BFF' icon={faCheck} /><li>There live the blind texts</li></div>
                            <div className='flex items-center gap-4'><FontAwesomeIcon color='#407BFF' icon={faCheck} /><li>Far far away behind the word</li></div>
                        </ul>
                    </div>
                    <div>
                        <div className="">
                            <blockquote className='italic mb-6'>
                                “Separated they <span className="bg-fontBg">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                            </blockquote>
                            <div className="flex">
                                <div className="w-12 h-12 object-fill rounded-[50px] overflow-hidden mr-3">
                                    <img src={riaz} alt="Image" />
                                </div>
                                <div>
                                    <strong className="block">Riaz Mohamed</strong><span className="block">Codeaify, Product Lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <a href="https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s" className="btn-video" data-fancybox="">
                        <span className="wrap-icon-play">
                            <svg className="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                            </svg>
                        </span>
                        <img src="images/dashboard.jpg" alt="Image" className="img-fluid img-shadow"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
));

export default Feature;
