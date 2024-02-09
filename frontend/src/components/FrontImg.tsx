import{ useState } from 'react';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';

export default function FrontImg() {
  const slides = [
    {
      url: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/87ab2850-d0a8-4ea7-a36c-6f2e4c6a6a2e.jpg',
    },
    {
      url: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/06bffb17-9483-429e-9145-25f046f65ad1.png',
    },
    {
      url: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/0661bb90-3d05-4709-95a2-c61f927cf78c.jpg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[420px] w-full m-auto px-4 relative group mb-12'>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
        >
      </div>

      {/* Left Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-white hover:bg-gray-400 cursor-pointer'>
        <button onClick={prevSlide}>
            <div>
                <img  className='rounded-full w-12' src={leftArrow} alt="" />
            </div>
        </button>
      </div>

      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-white hover:bg-gray-400 cursor-pointer'>
        <button onClick={nextSlide}>
            <div>
                <img  className='rounded-full w-12' src={rightArrow} alt="" />
            </div>
        </button>
      </div>
      
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
  );
}