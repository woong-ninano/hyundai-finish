
import React, { useEffect, useRef, useState } from 'react';
import { SectionData } from '../types';

const InfoSection: React.FC<SectionData> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 내부에서의 스크롤 진행도를 계산하여 activeIndex 결정
      if (top < 0 && Math.abs(top) < height) {
        const progress = Math.abs(top) / (height - windowHeight);
        const index = Math.min(
          Math.floor(progress * items.length),
          items.length - 1
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const goToPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const goToNext = () => setActiveIndex((prev) => Math.min(items.length - 1, prev + 1));

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${items.length * 100}vh` }} // 스크롤 길이를 아이템 개수에 비례하게 설정
    >
      {/* Sticky Wrapper: 화면에 고정되는 영역 */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden max-w-7xl mx-auto px-6">
        
        {/* Left side: Text Content (Width 60% on PC) */}
        <div className="flex-1 md:w-3/5 w-full order-2 md:order-1 flex items-center h-full">
          <div className="relative w-full h-64 md:h-auto">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out w-full md:max-w-[90%] ${
                  idx === activeIndex 
                    ? 'opacity-100 transform translate-y-[-50%]' 
                    : 'opacity-0 transform translate-y-[-40%] pointer-events-none'
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6 whitespace-pre-line">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                  {item.description}
                  {item.subDescription && (
                    <span className="block mt-4 text-gray-400 text-base md:text-lg">
                      {item.subDescription}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Device Frame */}
        <div className="flex-1 w-full md:w-2/5 order-1 md:order-2 flex flex-col items-center justify-center py-10">
          <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-gray-800">
            {/* Camera/Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-gray-100">
              {items.map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt={`Capture ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    idx === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls (Below Image) */}
          <div className="flex items-center gap-6 mt-8 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
            <button 
              onClick={goToPrev}
              disabled={activeIndex === 0}
              className={`text-gray-400 hover:text-gray-900 transition-colors ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="text-sm font-medium text-gray-900 tracking-widest">
              <span className="text-[#004a99]">{activeIndex + 1}</span>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-gray-400">{items.length}</span>
            </div>

            <button 
              onClick={goToNext}
              disabled={activeIndex === items.length - 1}
              className={`text-gray-400 hover:text-gray-900 transition-colors ${activeIndex === items.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
