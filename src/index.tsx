import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import App from './App';
import LoadingScreen from "./LoadingScreen"
import "./index.css"

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ar', 'en'],
    fallbackLng: 'ar',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: 'http://144.24.209.19:9090/api/language_data/language_display?p_language={{lng}}',
    },
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<LoadingScreen />}>
    <StrictMode>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <App />
    </StrictMode>
  </Suspense>,
);
