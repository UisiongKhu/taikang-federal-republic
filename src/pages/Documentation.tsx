import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Documentation = () => {
  useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-navy retro-border">
          <h2 className="text-4xl font-bold text-navy mb-8 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
            書類 (Documentation)
          </h2>
          <div className="prose prose-lg max-w-none iansui-regular text-gray-800">
            <p className="mb-4">[書類內容將在這裡顯示 / Documentation content will be displayed here]</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
