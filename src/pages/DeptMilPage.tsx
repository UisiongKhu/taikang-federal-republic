import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MilitaryFlag from '../assets/Flag_of_TaiKangArmedForces.png';

interface ChancelleryDept {
  name: string;
  items: string[];
}

interface DepartmentData {
  title: string;
  subtitle?: string;
  desc: string;
  departments: ChancelleryDept[];
}

const DeptMilPage = () => {
  const { t, i18n } = useTranslation();

  const deJureItems = t('dept.de_jure.items', { returnObjects: true }) as Array<{ name: string; desc: string }>;
  const exileItems = t('dept.exile.items', { returnObjects: true }) as Array<{ name: string; desc: string }>;
  const chancellery = t('dept.chancellery', { returnObjects: true }) as DepartmentData;
  const court = t('dept.court', { returnObjects: true }) as DepartmentData;

  const [isChancelleryOpen, setIsChancelleryOpen] = useState(false);
  const [isCourtOpen, setIsCourtOpen] = useState(false);

  // Check if item name corresponds to Chancellery across languages
  const isChancellery = (name: string) => {
    const chancelleryNames = ["總理院", "Premier's Office", "Chóng-lí-īⁿ"];
    return chancelleryNames.includes(name);
  };

  const isCourt = (name: string) => {
    const courtNames = ["共和國法院", "Republic Court", "Kiōng-hô-kok Hoat-īⁿ"];
    return courtNames.includes(name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand text-navy">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-navy retro-border space-y-16">
          
          {/* 部門 Section */}
          <section>
            <h2 className="text-4xl font-bold text-navy mb-10 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
              {t('dept.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 法理 Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brass uppercase tracking-widest border-l-4 border-brass pl-4 mb-8">
                  {t('dept.de_jure.title')}
                </h3>
                <div className="space-y-6">
                  {deJureItems.map((item, idx) => {
                    const isChan = isChancellery(item.name);
                    const isCrt = isCourt(item.name);
                    const isExpandable = isChan || isCrt;
                    const isOpen = isChan ? isChancelleryOpen : isCrt ? isCourtOpen : false;
                    const toggle = isChan ? () => setIsChancelleryOpen(!isChancelleryOpen) : isCrt ? () => setIsCourtOpen(!isCourtOpen) : () => {};
                    const data = isChan ? chancellery : isCrt ? court : null;
                    
                    return (
                      <div 
                        key={idx} 
                        className={`bg-sand/20 p-4 retro-border border-l-4 border-navy transition-all duration-500 relative overflow-hidden group
                          ${isExpandable ? 'cursor-pointer hover:bg-sand/40' : ''}`}
                        onClick={toggle}
                      >
                        <div className="flex justify-between items-start">
                           <div>
                             <h4 className="text-xl font-bold mb-1" style={{ fontFamily: "'GenRyuMin2TC-SB', serif" }}>
                               {item.name}
                             </h4>
                             <p className="text-gray-700 text-sm iansui-regular">{item.desc}</p>
                           </div>
                           {isExpandable && (
                             <div className={`text-brass transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                               </svg>
                             </div>
                           )}
                        </div>

                        {/* Interactive Sub-departments (Click reveal only) */}
                        {isExpandable && data && data.departments && (
                          <div className={`mt-4 transition-all duration-500 overflow-hidden 
                            ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            <div className="pt-4 border-t border-navy/10 space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                              {data.departments.map((dept, dIdx) => (
                                <div key={dIdx} className={`${isCrt ? '' : 'bg-white/60 p-4 md:p-6 retro-border border-navy/20 w-full shadow-sm hover:border-brass/40 transition-colors'}`}>
                                  {!isCrt && (
                                    <h5 className="text-base font-bold text-black mb-3 tracking-[0.15em] uppercase border-b-2 border-brass/20 pb-2" style={{ fontFamily: "'GenSekiGothic2TC-R', sans-serif" }}>
                                      {dept.name}
                                    </h5>
                                  )}
                                  <ul className={`flex flex-col gap-4 ${isCrt ? 'text-black' : 'space-y-3 text-sm text-gray-700'}`}>
                                    {dept.items.map((sub, sIdx) => (
                                      <li key={sIdx} className={`flex items-center gap-3 ${isCrt ? 'bg-white/60 p-3 retro-border border-navy/20 shadow-sm hover:border-brass/40 transition-colors justify-center' : ''}`}>
                                        {!isCrt && <span className="w-2 h-2 bg-navy rotate-45 flex-shrink-0"></span>}
                                        <span className={`font-bold tracking-wide ${isCrt ? 'text-base text-black' : 'text-gray-800 iansui-regular'}`} 
                                              style={isCrt ? { fontFamily: "'GenSekiGothic2TC-R', sans-serif" } : {}}>
                                          {sub}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <p className="text-xs italic text-gray-500 text-center iansui-regular mt-4 py-2 bg-sand/10 border-t border-navy/5">
                              {data.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 流亡政府 Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-brass uppercase tracking-widest border-l-4 border-brass pl-4 mb-8">
                  {t('dept.exile.title')}
                </h3>
                <div className="space-y-6">
                  {exileItems.map((item, idx) => (
                    <div key={idx} className="bg-sand/20 p-4 retro-border border-l-4 border-navy">
                      <h4 className="text-xl font-bold mb-1" style={{ fontFamily: "'GenRyuMin2TC-SB', serif" }}>{item.name}</h4>
                      <p className="text-gray-700 text-sm iansui-regular">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 軍事 Section */}
          <section>
            <h2 className="text-4xl font-bold text-navy mb-10 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
              {t('overview.sections.military')}
            </h2>

            <div className="bg-sand/30 p-8 retro-border border-l-4 border-l-navy space-y-8">
              {/* 頂面兩欄: 軍旗與資料 Top Section: Flag and Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center md:border-r-2 md:border-brass/40 md:pr-8">
                  <div className="h-48 md:h-56 flex items-center justify-center mb-4">
                    <img src={MilitaryFlag} alt="Flag of Tai Kang Armed Forces" className="h-full w-auto border-2 border-navy object-contain shadow-md" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 tracking-widest text-center">{t('overview.military.flag_label')}</span>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-start text-left">
                    <h4 className="text-2xl md:text-3xl font-bold text-navy tracking-widest mb-6 header-main-title border-b-2 border-brass pb-2 inline-block">{t('overview.military.name')}</h4>
                    
                    <div className="flex flex-col gap-y-4 text-lg leading-relaxed iansui-regular text-gray-800 items-start">
                      <div className="flex gap-x-4">
                        <span className="font-bold text-brass tracking-widest">{t('overview.military.type_label')}:</span>
                        <span className="font-bold tracking-widest">{t('overview.military.type_value')}</span>
                      </div>
                      
                      <div className="flex gap-x-4">
                        <span className="font-bold text-brass tracking-widest">{t('overview.military.func_label')}:</span>
                        <span className="font-bold tracking-widest">{t('overview.military.func_value')}</span>
                      </div>
                      
                      <div className="flex gap-x-4">
                        <span className="font-bold text-brass tracking-widest">{t('overview.military.form_label')}:</span>
                        <span className="font-bold tracking-widest">{t('overview.military.form_value')}</span>
                      </div>
                      
                      <div className="flex gap-x-4">
                        <span className="font-bold text-brass tracking-widest">{t('overview.military.base_label')}:</span>
                        <span className="font-bold tracking-widest">{t('overview.military.base_value')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下面一欄: 軍事格言 Bottom Section: Motto */}
              <div className="border-t-2 border-brass/20 pt-8 text-center">
                {i18n.language === 'en' ? (
                  <div className="space-y-4">
                    <div className="text-xl md:text-3xl font-bold text-navy tracking-[0.2em] uppercase leading-relaxed text-center" style={{ fontFamily: "'POJ Garamond08 Regular', serif" }}>
                      <p>{t('overview.military.motto_poj').split(',')[0]}</p>
                      <p>{t('overview.military.motto_poj').split(',')[1]?.trim()}</p>
                    </div>
                    <p className="text-xs md:text-sm text-brass tracking-widest uppercase mt-2 font-bold">
                      {t('overview.military.motto_en')}
                    </p>
                  </div>
                ) : (
                  <div className={`text-2xl md:text-${i18n.language === 'tg_HL' ? '4xl' : '3xl'} font-bold text-navy tracking-[0.2em] header-main-title py-2 leading-loosed ${i18n.language === 'tg_POJ' ? 'uppercase' : ''}`}>
                    <p>{t('overview.military.motto').includes('、') ? t('overview.military.motto').split('、')[0] : t('overview.military.motto').split(',')[0]}</p>
                    <p>{t('overview.military.motto').includes('、') ? t('overview.military.motto').split('、')[1] : t('overview.military.motto').split(',')[1]?.trim()}</p>
                  </div>
                )}
              </div>
            </div>
            

            <p className="mt-3 text-sm text-gray-600 italic iansui-regular tracking-wide">
              {t('overview.military.disclaimer')}
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeptMilPage;
