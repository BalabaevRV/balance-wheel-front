import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
        appName: 'BalanceWheel',
        dashboard: 'Dashboard',
        wheels: 'Wheels',
        records: 'Records',
        welcome: 'Welcome, {{name}}!',
        myWheels: 'My Wheels',
        recentRecords: 'Recent records',
        createRecord: 'Create record',
        createWheel: 'Create wheel',
        editRecord: 'Edit record',
        myWheelsEmpty: 'You have no wheels yet. Create your first wheel to get started!',
        myRecordsEmpty: 'You have no records yet. Create your first record to get started!'
    }
  },
  ru: {
    translation: {
        appName: 'Колесо баланса',
        dashboard: 'Дашбоард',
        wheels: 'Колёса',
        records: 'Записи',
        Welcome: 'Добро пожаловать, {{name}}!',
        MyWheels: 'Мои колёса',
        RecentRecords: 'Последние записи',
        createRecord: 'Создать запись',
        createWheel: 'Создать колесо',
        editRecord: 'Редактировать запись',
        myWheelsEmpty: 'У вас ещё нет колёс. Создайте своё первое колесо, чтобы начать!',
        myRecordsEmpty: 'У вас ещё нет записей. Создайте свою первую запись, чтобы начать!'
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
