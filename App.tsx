
import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import MetricChart from './components/MetricChart';
import { SectionData, MetricData } from './types';

const App: React.FC = () => {
  const mainSection: SectionData = {
    id: 'main-experience',
    items: [
      {
        title: "편리함 넘어 더 새롭고\n쾌적한 보험 경험",
        description: "복잡한 보험 가입 단계를 직관적으로 재구성하여, 누구나 쉽고 빠르게 가입할 수 있는 환경을 구축했습니다.",
        subDescription: "사용자의 행동 패턴을 분석하여 최적화된 동선을 제공하며, 클릭 몇 번으로 나에게 맞는 보험을 바로 확인할 수 있습니다.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "관심 상품을 한눈에,\n나만의 보험 대시보드",
        description: "여러 개의 보험 상품을 카테고리별로 분류하여 복잡한 보장 내용을 명확하게 정리해 드립니다.",
        subDescription: "관심 상품 비교부터 가입 현황까지, 파편화된 정보를 한곳에 모아 관리할 수 있는 개인화 폴더 기능을 도입했습니다.",
        image: "https://images.unsplash.com/photo-1512428559083-a4369020473a?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "24시간 중단 없는\n스마트한 고객 응대",
        description: "AI 챗봇과 직관적인 FAQ를 통해 고객이 필요할 때 즉각적인 도움을 받을 수 있는 지능형 서포트 시스템을 구축했습니다.",
        subDescription: "상담 대기 시간 없이 즉시 해결하는 디지털 고객 센터가 365일 고객님의 안전을 지원합니다.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const performanceData: MetricData[] = [
    { name: '기존 시스템', value: 45 },
    { name: '고도화 1차', value: 72 },
    { name: '고도화 완료', value: 98 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#004a99] uppercase bg-blue-50 rounded-full">
            Project Completion Report 2024
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            현대해상 <span className="text-[#004a99]">Direct</span><br />
            디지털 혁신의 시작
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            사용자 중심의 가치와 최첨단 기술이 만나<br className="hidden md:block" /> 
            더 나은 보험 서비스를 완성했습니다.
          </p>
          <div className="mt-12 animate-bounce flex justify-center">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7m14-8l-7 7-7-7" /></svg>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-gray-50 rounded-full -z-0"></div>
      </section>

      {/* Main Scrollytelling Section */}
      <main className="bg-white">
        <InfoSection {...mainSection} />
        
        {/* Performance Chart Section */}
        <section className="py-32 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-bold text-gray-900 mb-4">성과 수치 리포트</h3>
               <p className="text-gray-500">고도화 프로젝트 완료 후 사용자 경험 점수가 비약적으로 향상되었습니다.</p>
            </div>
            <MetricChart data={performanceData} title="사용자 편의성 지수 측정 (UX Index)" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#004a99] rounded-full flex items-center justify-center">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-xl text-gray-900">현대해상</span>
          </div>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            본 보고서는 현대해상 다이렉트 고도화 구축 프로젝트의<br /> 완료를 공식적으로 보고하기 위해 제작되었습니다.
          </p>
          <p className="text-xs text-gray-300 mt-12 italic">© 2024 Hyundai Marine & Fire Insurance Direct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
