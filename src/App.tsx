import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NationalOverview from './pages/NationalOverview';
import NewsPage from './pages/NewsPage';
import DeptMilPage from './pages/DeptMilPage';
import HistoryPage from './pages/HistoryPage';
import CulturePage from './pages/CulturePage';
import TKCA from './pages/TKCA';
import KSBorderGuard from './pages/KSBorderGuard';
import Documentation from './pages/Documentation';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.className = `lang-${i18n.language}`;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/national-overview" element={<NationalOverview />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/departments" element={<DeptMilPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/tkca" element={<TKCA />} />
        <Route path="/ks-border-guard" element={<KSBorderGuard />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
