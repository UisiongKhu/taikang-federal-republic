import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LawPage = () => {
  const { t } = useTranslation();
  const links = t('sidebar.links.items', { returnObjects: true }) as string[];
  const title = links[6]?.replace('‣ ', '') || 'Laws';

  return (
    <div className="min-h-screen flex flex-col bg-sand text-navy">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-navy retro-border">
          <h2 className="text-4xl font-bold text-navy mb-8 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none iansui-regular text-gray-800 space-y-6">
            <p className="italic text-gray-500">
              [法律內容整備中 / Legal content is being prepared]
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LawPage;
