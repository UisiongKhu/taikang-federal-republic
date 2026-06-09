import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TKCA = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-sand">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-navy retro-border">
          <h2 className="text-4xl font-bold text-navy mb-8 tracking-widest uppercase header-main-title border-brass border-b-2 pb-4">
            {t('tkca.title')}
          </h2>
          
          <div className="prose prose-lg max-w-none iansui-regular text-gray-800">
            <h3 className="text-2xl font-bold text-navy mb-6">{t('tkca.history_title')}</h3>
            <div className="space-y-6 mb-12">
              {(t('tkca.history', { returnObjects: true }) as { year: string, content: string }[]).map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="md:w-1/4 font-bold text-navy flex-shrink-0 mb-2 md:mb-0">
                    {item.year}
                  </div>
                  <div className="md:w-3/4">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-navy mb-6">{t('tkca.publications_title')}</h3>
            <div className="space-y-8">
              {(t('tkca.publications', { returnObjects: true }) as { title: string, language: string, period: string, desc: string, credits?: { role: string, name: string }[], events?: { period: string, status: string }[] }[]).map((pub, index) => (
                <div key={index} className="bg-sand p-6 rounded-sm border border-brass/30">
                  <h4 className="text-xl font-bold text-navy mb-2">{pub.title}</h4>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4 border-b border-gray-300 pb-3">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold uppercase tracking-wider text-xs">Language:</span>
                        <span>{pub.language}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold uppercase tracking-wider text-xs">Period:</span>
                        <span>{pub.period}</span>
                      </div>
                    </div>
                    {pub.credits && pub.credits.length > 0 && (
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        {pub.credits.map((credit, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <span className="font-semibold uppercase tracking-wider text-xs">{credit.role}:</span>
                            <span>{credit.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {pub.desc && <p className="mb-4 text-gray-800 leading-relaxed">{pub.desc}</p>}
                  
                  {pub.events && pub.events.length > 0 && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full text-sm text-left border border-gray-300">
                        <thead className="bg-navy text-white">
                          <tr>
                            <th className="px-4 py-2 w-1/3">Period</th>
                            <th className="px-4 py-2">Status / Event</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {pub.events.map((event, idx) => (
                            <tr key={idx} className="bg-white">
                              <td className="px-4 py-2 font-medium text-gray-900">{event.period}</td>
                              <td className="px-4 py-2 text-gray-700">{event.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
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

export default TKCA;
