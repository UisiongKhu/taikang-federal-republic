import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NationalFlag from '../assets/Flag_of_TaiKangState.png';
import NationalBadge from '../assets/Badge_of_BritishTaiKang_color.png';
import MilitaryFlag from '../assets/Flag_of_TaiKangArmedForces.png';

const NationalOverview = () => {
  const { t, i18n } = useTranslation();
  
  // We can get the title from the sidebar translation to keep it consistent
  const links = t('sidebar.links.items', { returnObjects: true }) as string[];
  const title = links[0]?.replace('‣ ', '') || 'National Overview';

  return (
    <div className="min-h-screen font-sans bg-sand text-navy flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-4 flex-grow w-full">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-10 border-b-4 border-brass pb-2 inline-block header-main-title">
          {title}
        </h2>
        
        <div className="bg-white p-8 md:p-12 retro-border shadow-xl space-y-12">
          
          {/* 國名 */}
          <section>
            <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.name')}</h3>
            <div className="space-y-4 bg-sand/30 p-6 retro-border border-l-4 border-l-navy">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-baseline border-b border-gray-300 pb-3 gap-y-1">
                <div className="hidden md:block"></div>
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-bold tracking-widest text-navy header-main-title">Tâi-kang Liân-pang Kiōng-hô-kok</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-sm text-gray-600 font-medium">(Pe̍h-ōe-jī)</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-baseline border-b border-gray-300 pb-3 gap-y-1">
                <div className="hidden md:block"></div>
                <div className="text-center">
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-navy header-main-title">台江聯邦共和國</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-sm text-gray-600 font-medium">(漢字)</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-baseline gap-y-1">
                <div className="hidden md:block"></div>
                <div className="text-center">
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-navy header-main-title">Tai-Kang Federal Republic</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-sm text-gray-600 font-medium">(English)</span>
                </div>
              </div>
            </div>
          </section>

          {/* 國旗與國徽 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.flag')}</h3>
              <div className="h-48 md:h-56 flex items-center justify-center mb-6">
                <img src={NationalFlag} alt="Flag of Tai Kang State" className="h-full w-auto border-2 border-navy shadow-md object-contain" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed iansui-regular text-navy font-bold flex-grow border-l-4 border-brass pl-4">
                {t('overview.flag_desc')}
              </p>
            </section>

            <section className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.emblem')}</h3>
              <div className="h-48 md:h-56 flex items-center justify-center mb-6">
                <img src={NationalBadge} alt="Tai Kang Federal Republic Emblem" className="h-full aspect-square rounded-full border-4 border-navy shadow-md bg-white object-contain" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed iansui-regular text-navy font-bold flex-grow border-l-4 border-brass pl-4">
                {t('overview.emblem_desc')}
              </p>
            </section>
          </div>

          {/* 國家格言 */}
          <section>
            <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.motto')}</h3>
            <div className="bg-navy p-6 md:p-8 text-center retro-border shadow-md">
              <p className={`${i18n.language === 'en' ? 'text-lg md:text-2xl lg:text-3xl' : 'text-2xl md:text-4xl'} font-bold tracking-widest text-white header-main-title`}>
                "{t('hero.title_1')}, {t('hero.title_2')}"
              </p>
              {i18n.language !== 'en' && (
                <p className="text-xs md:text-sm text-brass tracking-widest uppercase mt-4">
                  "Independence of the Sandbar, Freedom of the Tides"
                </p>
              )}
            </div>
          </section>

          {/* 法定語言 */}
          <section>
            <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.languages')}</h3>
            <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed iansui-regular text-navy font-bold space-y-2 border-l-4 border-brass pl-4">
              <li>{t('overview.lang_list.taiwanese')}</li>
              <li>{t('overview.lang_list.english')}</li>
            </ul>
          </section>

          {/* 軍事 */}
          <section>
            <h3 className="text-2xl font-bold text-brass mb-4 uppercase tracking-widest">{t('overview.sections.military')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start bg-sand/30 p-8 retro-border border-l-4 border-l-navy">
              <div className="flex flex-col items-center">
                <img src={MilitaryFlag} alt="Flag of Tai Kang Armed Forces" className="w-full max-w-xs border-2 border-navy object-contain shadow-md mb-4" />
                <span className="text-sm font-bold text-gray-600 tracking-widest">{t('overview.military.flag_label')}</span>
              </div>
              <div className="text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-navy tracking-widest mb-6 header-main-title border-b-2 border-brass pb-2 inline-block">{t('overview.military.name')}</h4>
                
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-lg leading-relaxed iansui-regular text-gray-800">
                  <div className="font-bold text-brass tracking-widest text-right">{t('overview.military.type_label')}:</div>
                  <div className="font-bold tracking-widest">{t('overview.military.type_value')}</div>
                  
                  <div className="font-bold text-brass tracking-widest text-right">{t('overview.military.func_label')}:</div>
                  <div className="font-bold tracking-widest">{t('overview.military.func_value')}</div>
                  
                  <div className="font-bold text-brass tracking-widest text-right">{t('overview.military.form_label')}:</div>
                  <div className="font-bold tracking-widest">{t('overview.military.form_value')}</div>
                  
                  <div className="font-bold text-brass tracking-widest text-right">{t('overview.military.base_label')}:</div>
                  <div className="font-bold tracking-widest">{t('overview.military.base_value')}</div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600 italic iansui-regular tracking-wide">
              {t('overview.military.disclaimer')}
            </p>
          </section>

          {/* 經濟 */}
          <section>
            <h3 className="text-2xl font-bold text-brass mb-3 uppercase tracking-widest">{t('overview.sections.economy')}</h3>
            <p className="text-lg leading-relaxed iansui-regular text-gray-800">
              [經濟資料將在這裡顯示]
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NationalOverview;
