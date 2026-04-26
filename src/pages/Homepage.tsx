import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import News from '../components/News';
import Sidebar from '../components/Sidebar';

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-sand text-navy">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 px-4 border-b-8 border-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${i18n.language === 'en' ? 'text-5xl' : 'text-6xl'} mb-6 hero-title`}>
            {t('hero.title_1')} <br />
            <span className="text-brass">{t('hero.title_2')}</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 font-light leading-relaxed max-w-2xl mx-auto iansui-regular">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-brass text-navy px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer border-none">
              {t('hero.cta_join')}
            </button>
            <button 
              onClick={() => navigate('/news')}
              className="border border-white bg-transparent text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-colors cursor-pointer"
            >
              {t('hero.cta_read')}
            </button>
          </div>
        </div>
      </section>

      {/* News & Literary Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <News onArticleClick={(article) => navigate('/news', { state: { article } })} />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
