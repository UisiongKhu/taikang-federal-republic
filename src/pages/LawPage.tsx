import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LawPage = () => {
  const { t } = useTranslation();

  const declarationArticles = t('laws.declaration.articles', { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <div className="min-h-screen flex flex-col bg-sand text-navy">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-16 shadow-2xl border-t-8 border-navy retro-border max-w-4xl mx-auto relative overflow-hidden">
          {/* Watermark-like decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brass/5 rounded-full -ml-24 -mb-24 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-12 tracking-[0.2em] uppercase header-main-title border-brass border-b-4 pb-6 text-center">
              {t('laws.declaration.title')}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-900 space-y-12 iansui-regular">
              {/* Preamble */}
              <section className="bg-navy/5 p-8 border-l-4 border-navy italic shadow-inner">
                <h3 className="text-xl font-bold text-navy mb-4 serif tracking-widest">{t('laws.declaration.preamble_header')}</h3>
                <p className="leading-relaxed whitespace-pre-wrap text-lg">
                  {t('laws.declaration.preamble_content')}
                </p>
              </section>

              {/* Articles */}
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-navy mb-8 tracking-widest border-b-2 border-brass/30 pb-2 inline-block">
                  {t('laws.declaration.articles_header')}
                </h3>
                
                <div className="space-y-12">
                  {declarationArticles.map((article, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-xl font-bold text-navy mb-4 header-main-title flex items-center gap-4">
                        <span className="w-8 h-px bg-brass"></span>
                        {article.title}
                      </h4>
                      <div className="pl-12 border-l border-brass/20">
                        <p className="leading-relaxed whitespace-pre-wrap text-gray-800 text-base md:text-lg tracking-wide">
                          {article.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Seal/Signature placeholder */}
              <div className="mt-20 pt-12 border-t border-navy/10 flex flex-col items-end">
                <div className="text-right space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Tai-Kang Federal Republic</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Government-in-Exile</p>
                  <div className="mt-8 w-40 h-40 border-4 border-brass/40 rounded-full flex items-center justify-center text-brass/40 font-bold uppercase rotate-12 text-xs text-center p-4">
                    Official Seal of the Republic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LawPage;
