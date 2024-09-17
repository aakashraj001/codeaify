import React from 'react';

const Home = React.forwardRef((props, ref) => (
    <section ref={ref} className='h-[100vh] w-full pt-[18vh]'>
        <div className='w-[70vw] mx-auto'>
            <div className='w-[40vw]'>
                <h2 className='text-[64px] leading-snug font-bold'>Your Gateway to Innovative AI Solutions</h2>
                <p>Specialists implementing intelligent road technologies use, among others, the hybrid method. It combines convolutional neural networks (CNN) and mathematical models. CNNs can be trained using image material, providing better performance than “traditional” detection and identification algorithms.</p>
                <div>
                    <button className='bg-[#4CAF50] hover:bg-[#3e8e]'>See Feature</button>
                    <button className='bg-[#4CAF50] hover:bg-[#3e8e]'>Pricing</button>
                </div>
            </div>
        </div>
    </section>
));

export default Home;
