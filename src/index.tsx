import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { ChakraProvider } from '@chakra-ui/react';
import CallToActionWithAnnotation from "./loading"

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ar', 'en'],
    fallbackLng: 'ar',
    debug: false,
    detection: {
      order: ['cookie', 'path', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'http://144.24.209.19:9090/language_data/language_display?p_language={{lng}}',
    },
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<CallToActionWithAnnotation />}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Suspense>,
);
