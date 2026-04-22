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
        AddField: 'Add field',
        recentRecords: 'Recent records',
        createRecord: 'Create record',
        wheelName: 'Wheel name',
        removeField: 'Remove',
        createWheel: 'Create wheel',
        editRecord: 'Edit record',
        newRecord: 'New Record',
        myWheelsEmpty: 'You have no wheels yet. Create your first wheel to get started!',
        myRecordsEmpty: 'You have no records yet. Create your first record to get started!',
        Save: 'Save',
        selectWheel: 'Select a wheel...',
        selectWheelFirst: 'Select a wheel first...',
        editWheel: 'Edit wheel',
        loading: 'Loading...',
        login: 'Login',
        password: 'Password',
        loginAction: 'Login',
        loginFailed: 'Login failed. Please check your credentials and try again.',
        signupFailed: 'Signup failed. Please check your input and try again.',
        signupAction: 'Sign Up',
        alreadyRegistered: 'Already registered?',
        dontHaveAccount: 'Don\'t have an account?'
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
        AddField: 'Добавить поле',
        RecentRecords: 'Последние записи',
        createRecord: 'Создать запись',
        wheelName: 'Название колеса',
        createWheel: 'Создать колесо',
        editRecord: 'Редактировать запись',
        newRecord: 'Новая запись',
        removeField: 'Удалить',
        myWheelsEmpty: 'У вас ещё нет колёс. Создайте своё первое колесо, чтобы начать!',
        myRecordsEmpty: 'У вас ещё нет записей. Создайте свою первую запись, чтобы начать!',
        Save: 'Сохранить',
        selectWheel: 'Выберите колесо...',
        selectWheelFirst: 'Сначала выберите колесо...',
        editWheel: 'Редактировать колесо',
        loading: 'Загрузка...',
        login: 'Логин',
        password: 'Пароль',
        loginAction: 'Войти',
        loginFailed: 'Ошибка входа. Пожалуйста, проверьте свои учетные данные и попробуйте снова.',
        signupFailed: 'Ошибка регистрации. Пожалуйста, проверьте введенные данные и попробуйте снова.',
        signupAction: 'Зарегистрироваться',
        alreadyRegistered: 'Уже зарегистрированы?',
        dontHaveAccount: 'Нет аккаунта?'
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
