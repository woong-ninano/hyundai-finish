
import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import MetricChart from './components/MetricChart';
import { SectionData, MetricData } from './types';

const App: React.FC = () => {
  const sections: SectionData[] = [
    {
      id: 'uxui',
      title: "편리함 넘어 더 새롭고\n쾌적한 보험 경험",
      description: "복잡한 보험 가입 단계를 직관적으로 재구성하여, 누구나 쉽고 빠르게 가입할 수 있는 환경을 구축했습니다.",
      subDescription: "사용자의 행동 패턴을 분석하여 최적화된 동선을 제공하며, 클릭 몇 번으로 나에게 맞는 보험을 바로 확인할 수 있습니다.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 'folder',
      title: "관심 상품을 한눈에,\n나만의 보험 대시보드",
      description: "여러 개의 보험 상품을 카테고리별로 분류하여 복잡한 보장 내용을 명확하게 정리해 드립니다.",
      subDescription: "관심 상품 비교부터 가입 현황까지, 파편화된 정보를 한곳에 모아 관리할 수 있는 개인화 폴더 기능을 도입했습니다.",
      images: [
        "https://images.unsplash.com/photo-1512428559083-a4369020473a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1454165833767-0266b196773f?auto=format&fit=crop&q=80&w=800"
      ]
    }
  ];

  const performanceData: MetricData[] = [
    { name: '기존 시스템', value: 45 },
    { name: '고도화 1차', value: 72 },
    { name: '고도화 완료', value: 98 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#004a99] uppercase bg-blue-50 rounded-full">
            Project Completion Report 2024
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            현대해상 <span className="text-[#004a99]">Direct</span><br />
            디지털 혁신의 시작
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-light">
            사용자 중심의 가치와 최첨단 기술이 만나 더 나은 보험 서비스를 완성했습니다. 
            단순한 웹사이트를 넘어 고객의 일상을 지키는 든든한 파트너로 거듭납니다.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="bg-white">
        {sections.map((section) => (
          <InfoSection key={section.id} {...section} />
        ))}
        
        {/* Performance Chart Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="reveal">
             <MetricChart data={performanceData} title="사용자 편의성 지수 측정 (UX Index)" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
            <div className="w-6 h-6 bg-[#004a99] rounded-full flex items-center justify-center">
               <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-gray-900">현대해상</span>
          </div>
          <p className="text-xs text-gray-400">© 2024 Hyundai Marine & Fire Insurance Direct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
