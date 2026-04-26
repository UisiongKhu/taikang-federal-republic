import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MilitaryFlag from '../assets/Flag_of_TaiKangArmedForces.png';

const DeptMilPage = () => {
  const { t } = useTranslation();

  const deJureItems = t('dept.de_jure.items', { returnObjects: true }) as Array<{ name: string; desc: string }>;
  const exileItems = t('dept.exile.items', { returnObjects: true }) as Array<{ name: string; desc: string }>;

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
                  {deJureItems.map((item, idx) => (
                    <div key={idx} className="bg-sand/20 p-4 retro-border border-l-4 border-navy">
                      <h4 className="text-xl font-bold mb-1 iansui-regular">{item.name}</h4>
                      <p className="text-gray-700 text-sm iansui-regular">{item.desc}</p>
                    </div>
                  ))}
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
                      <h4 className="text-xl font-bold mb-1 iansui-regular">{item.name}</h4>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-sand/30 p-8 retro-border border-l-4 border-l-navy">
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
