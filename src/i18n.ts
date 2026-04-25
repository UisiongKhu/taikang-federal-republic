import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locale/en.json';
import tgHLTranslations from './locale/tg_HL.json';
import tgPOJTranslations from './locale/tg_POJ.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      tg_HL: tgHLTranslations,
      tg_POJ: tgPOJTranslations
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
