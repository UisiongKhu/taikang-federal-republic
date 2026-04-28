import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { t } = useTranslation();
  const links = t('sidebar.links.items', { returnObjects: true }) as string[];

  return (
    <aside className="space-y-12 text-navy">
      {/* Broad Arrow Section */}
      <div className="retro-border p-6 bg-white shadow-xl">
        <div className="flex justify-center mb-4">
          <svg width="40" height="40" viewBox="0 0 100 100" className="text-brass fill-current">
            <path d="M50 10 L80 90 L50 70 L20 90 Z" />
          </svg>
        </div>
        <h3 className="text-center font-bold uppercase tracking-widest mb-4">{t('sidebar.property.title')}</h3>
        <p className="text-xs text-center text-gray-500 italic mb-6">{t('sidebar.property.description')}</p>
        <div className="space-y-2">
          <a href="#" className="block w-full bg-navy text-white text-center py-2 text-sm hover:bg-brass transition-colors">
            {t('sidebar.property.btn_login')}
          </a>
          <a href="#" className="block w-full border border-navy text-navy text-center py-2 text-sm hover:bg-navy hover:text-white transition-colors">
            {t('sidebar.property.btn_asylum')}
          </a>
        </div>
      </div>

      {/* Links */}
      <div>
        <h3 className="font-bold uppercase tracking-widest mb-4 border-b-2 border-navy pb-2">{t('sidebar.links.title')}</h3>
        <ul className="space-y-3 text-sm">
          {links.map((link, idx) => {
            // Mapping routes based on original order:
            // 0: National Overview, 1: Government (Skip), 2: TKCA, 3: History, 4: KS Border Guard, 5: Documentation
            const routes = [
              '/national-overview',
              null, // Skip Government
              '/tkca',
              '/history',
              '/ks-border-guard',
              '/documentation',
              '/laws'
            ];

            const route = routes[idx];
            if (route === null) return null;

            return (
              <li key={idx}>
                <Link to={route} className="hover:text-brass transition-colors block py-1 border-b border-transparent hover:border-brass/30">
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Branding */}
      <div className="pt-8">
        <p className="text-xs text-gray-500 leading-tight">
          {t('sidebar.branding_1')} <br />
          {t('sidebar.branding_2')} <br />
          {t('sidebar.branding_3')}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
