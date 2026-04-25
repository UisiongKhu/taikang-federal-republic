import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NationalBadge from '../assets/Badge_of_BritishTaiKang_color.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <header className="bg-navy text-white py-6 px-4 md:px-12 border-b-4 border-brass">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <img src={NationalBadge} alt="Tai Kang Federal Republic Emblem" className="w-[70px] h-[70px] rounded-full" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase m-0 header-main-title">{t('header.title')}</h1>
            <p className="serif italic text-sm text-brass tracking-tighter m-0 mt-1">{t('header.subtitle')}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm uppercase tracking-widest font-bold">
          <a href="#" className="nav-link text-white no-underline">{t('header.nav.news')}</a>
          <a href="#" className="nav-link text-white no-underline">{t('header.nav.departments')}</a>
          <a href="#" className="nav-link text-white no-underline">{t('header.nav.history')}</a>
          <a href="#" className="nav-link text-white no-underline">{t('header.nav.culture')}</a>
          <a href="#" className="nav-link text-brass no-underline">{t('header.nav.apply')}</a>

          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="bg-navy text-white border border-brass p-1 outline-none cursor-pointer"
          >
            <option value="en">English</option>
            <option value="tg_HL">台語 (漢字)</option>
            <option value="tg_POJ">Taigi (POJ)</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
