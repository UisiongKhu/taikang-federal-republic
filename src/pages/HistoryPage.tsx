import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HistoryPage = () => {
  const { t } = useTranslation();

  const historyTimeline = (t('history_timeline', { returnObjects: true }) || []) as Array<{
    title: string;
    items: Array<{ time?: string; content: string }>;
  }>;

  return (
    <div className="min-h-screen flex flex-col bg-sand text-navy">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-16 shadow-2xl border-t-8 border-navy retro-border relative overflow-hidden">
          {/* Watermark-like decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brass/5 rounded-full -ml-24 -mb-24 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-12 tracking-[0.2em] uppercase header-main-title border-brass border-b-4 pb-6 text-center">
              {t('header.nav.history')}
            </h2>
            
            <div className="relative border-l-2 border-brass/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
              {historyTimeline.map((section, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 bg-navy border-2 border-brass rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 tracking-wider header-main-title flex items-center gap-3">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed iansui-regular tracking-wide pl-2">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="relative">
                        {item.time && (
                          <>
                            {/* Smaller timeline dot for sub-items with time */}
                            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-2.5 h-2.5 bg-sand border-2 border-brass rounded-full hover:scale-125 transition-transform duration-300"></div>
                            
                            <h4 className="text-sm md:text-base font-bold text-brass tracking-wider mb-1 uppercase">
                              {item.time}
                            </h4>
                          </>
                        )}
                        <p className={item.time ? "text-gray-800" : "text-gray-800 mt-2"}>
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
