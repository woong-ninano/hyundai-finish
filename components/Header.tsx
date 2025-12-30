import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoPathType, setLogoPathType] = useState<'images' | 'image' | 'error'>('images');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLogoUrl = (type: 'images' | 'image') => 
    `https://raw.githubusercontent.com/woong-ninano/hyundai-finish/main/${type}/img_logo_ty1.png`;

  const handleLogoError = () => {
    if (logoPathType === 'images') {
      console.warn("Retrying with 'image' folder...");
      setLogoPathType('image');
    } else if (logoPathType === 'image') {
      console.error("All logo paths failed. Using text fallback.");
      setLogoPathType('error');
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo Area */}
        <div className="flex items-center cursor-pointer">
          {logoPathType !== 'error' ? (
            <img 
              src={getLogoUrl(logoPathType as 'images' | 'image')} 
              alt="현대해상 다이렉트" 
              className="h-7 md:h-8 object-contain transition-transform duration-300 hover:scale-105"
              onError={handleLogoError}
            />
          ) : (
            <div className="flex items-center group">
              <span className="text-[#004a99] font-extrabold text-xl md:text-2xl tracking-tighter flex items-center">
                현대해상 <span className="text-[#ff6a00] ml-1.5">다이렉트</span>
              </span>
            </div>
          )}
        </div>

        {/* Right: Project Title */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#004a99] uppercase opacity-60 mb-0.5">Project Final Report</span>
          <span className={`text-sm lg:text-base font-bold transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}>
            다이렉트 플랫폼 고도화 구축
          </span>
        </div>
        
        {/* Mobile Mini Title */}
        <div className="md:hidden text-right">
          <span className="text-xs font-bold text-gray-900">완료보고서</span>
        </div>
      </div>
    </header>
  );
};

export default Header;