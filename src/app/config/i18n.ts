import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
        appName: 'BalanceWheel',
        dashboard: 'Dashboard',
        wheels: 'Wheels',
        records: 'Records'
    }
  },
  ru: {
    translation: {
        appName: 'Колесо баланса',
        dashboard: 'Дашбоард',
        wheels: 'Колёса',
        records: 'Записи'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
