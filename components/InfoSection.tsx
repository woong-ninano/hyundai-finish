
import React, { useEffect, useRef, useState } from 'react';
import { SectionData } from '../types';

const InfoSection: React.FC<SectionData> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  // 각 아이템별로 현재 보여지는 이미지의 인덱스를 관리 (배열 형태)
  const [subImageIndices, setSubImageIndices] = useState<number[]>(items.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (top < 0 && Math.abs(top) < height) {
        const totalScrollableHeight = height - windowHeight;
        const progress = Math.abs(top) / totalScrollableHeight;
        const index = Math.min(
          Math.floor(progress * items.length),
          items.length - 1
        );
        setActiveItemIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  const handlePrevSubImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubImageIndices(prev => {
      const next = [...prev];
      next[activeItemIndex] = Math.max(0, next[activeItemIndex] - 1);
      return next;
    });
  };

  const handleNextSubImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubImageIndices(prev => {
      const next = [...prev];
      const maxIdx = items[activeItemIndex].images.length - 1;
      next[activeItemIndex] = Math.min(maxIdx, next[activeItemIndex] + 1);
      return next;
    });
  };

  const currentSubImageIndex = subImageIndices[activeItemIndex];
  const currentItemImages = items[activeItemIndex].images;

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${items.length * 120}vh` }} // 스크롤 여유를 위해 길이를 조금 더 늘림
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden max-w-7xl mx-auto px-6">
        
        {/* Left side: Text Content (Width 60% on PC) */}
        <div className="flex-1 md:w-[60%] w-full order-2 md:order-1 flex items-center h-full">
          <div className="relative w-full">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 ease-in-out w-full md:max-w-[85%] ${
                  idx === activeItemIndex 
                    ? 'opacity-100 visible translate-y-0 relative' 
                    : 'opacity-0 invisible absolute top-0 translate-y-10'
                }`}
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8 whitespace-pre-line">
                  {item.title}
                </h2>
                <div className="w-12 h-[2px] bg-[#004a99] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                  {item.description}
                  {item.subDescription && (
                    <span className="block mt-6 text-gray-400 text-base md:text-lg border-l-2 border-gray-100 pl-4">
                      {item.subDescription}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Slim Device Frame (Width 40% on PC) */}
        <div className="flex-1 w-full md:w-[40%] order-1 md:order-2 flex flex-col items-center justify-center py-10">
          <div className="relative w-full max-w-[260px] md:max-w-[300px] aspect-[9/18.5] bg-white rounded-[2.5rem] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[3px] border-gray-900 overflow-hidden">
            {/* Top Speaker / Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-gray-50">
              {items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className={`absolute inset-0 transition-opacity duration-700 ${itemIdx === activeItemIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  {item.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`Screen ${itemIdx}-${imgIdx}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 transform ${
                        imgIdx === subImageIndices[itemIdx] ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Image Navigation Controls (Only for the current text block) */}
          <div className="flex items-center gap-6 mt-8">
            <button 
              onClick={handlePrevSubImage}
              disabled={currentSubImageIndex === 0}
              className={`p-2 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-all ${currentSubImageIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'active:scale-90'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="text-sm font-semibold text-gray-900 tabular-nums">
              <span className="text-[#004a99]">{currentSubImageIndex + 1}</span>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-gray-400">{currentItemImages.length}</span>
            </div>

            <button 
              onClick={handleNextSubImage}
              disabled={currentSubImageIndex === currentItemImages.length - 1}
              className={`p-2 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-all ${currentSubImageIndex === currentItemImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'active:scale-90'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
