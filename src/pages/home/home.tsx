import React from 'react';
import bgImage from '../../assets/images/home-bg.svg'

const Home = React.forwardRef((props, ref) => (
    <section ref={ref} className=' w-full pt-[18vh]'>
        <div className='w-[70vw] mx-auto flex items-center gap-10'>
            <div className='w-[40vw] flex gap-10 flex-col pt-10'>
                <h2 className='text-[70px] font-[700] leading-[70px]'>Your Gateway to Innovative AI Solutions</h2>
                <p className='text-fontSecondary font-[500]'>Specialists implementing intelligent road technologies use, among others, the hybrid method. It combines convolutional neural networks (CNN) and mathematical models. CNNs can be trained using image material, providing better performance than “traditional” detection and identification algorithms.</p>
                <div className='flex gap-4'>
                    <button className='bg-[#2841ff] text-white hover:bg-[#4e51ffee] w-32 h-12 rounded-[50px]'>See Feature</button>
                    <button className='border-[1px] border-[#2841ff] w-32 h-12 rounded-[50px]'>Pricing</button>
                </div>
            </div>
            <div className='flex h-[30vw] w-[100vh]'>
                <img src={bgImage} alt="image" />
            </div>
        </div>
    </section>
));

export default Home;
