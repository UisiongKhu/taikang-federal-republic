import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NationalOverview from './pages/NationalOverview';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.className = `lang-${i18n.language}`;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/national-overview" element={<NationalOverview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
