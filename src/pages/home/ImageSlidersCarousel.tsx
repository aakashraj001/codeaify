import React, { useState } from 'react';
import ImageOne from '../../assets/images/growYourBusiness.webp';

const ImageSlidersCarousel: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        { title: 'Grow Your Business', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', img: ImageOne },
        { title: 'Build Products', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', img: ImageOne },
        { title: 'Success Every Day', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', img: ImageOne },
        { title: 'Bring Ideas to Life', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.', img: ImageOne }
    ];

    const handleClick = (index: number) => {
        setActiveSlide(index);
    };

    return (
        <div className="relative overflow-hidden w-full flex  gap-5 max-w-[90vw] m-0 mx-auto">
            <div className={`relative w-[50vw] overflow-x-scroll flex items-center justify-center  h-96 transition-transform duration-500 ease-in-out `}>
                {
                    slides.map((item) => {
                        return (
                            <div className='!w-[50vw]'>
                                <img src={item.img} alt='loading ' className='object-cover bg-no-repeat w-[1000px] h-[40vh]' />
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col  w-[20vw] justify-center mt-4 space-x-4">
                {slides.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer p-2 text-center border-l-4 ${index === activeSlide ? 'border-blue-500 bg-white' : 'border-transparent'}`}
                    >
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlidersCarousel;
