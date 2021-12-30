import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locale/ru.json';
import en from './locale/en.json';

i18n.use(initReactI18next).init({
    fallbackNS: '',
    defaultNS: '',
    keySeparator: '.',
    resources: { ru, en },
    lng: 'ru',
    interpolation: {
        escapeValue: false,
    },
    debug: false
});

export default i18n;