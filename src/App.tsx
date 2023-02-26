import { memo, useEffect } from 'react';
import './style.css'
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/component";
import { PageRoutes } from "./global/Route";
import { useTranslation } from 'react-i18next'
//@ts-ignore
import cookies from 'js-cookie'

const App = () => {
  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'ar';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  useEffect(() => {
    console.log('Setting page stuff')
    //@ts-ignore
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('aptl')
  }, [currentLanguage, t])
  return (
    <div className="App">
      <Router>
        <Switch>
          {PageRoutes.map((item: any) => {
            if (item.Path !== "") {
              return (
                <Route exact path={`/${item.Path}`}>
                  <Header />
                  <div className="container1">
                    {< item.Component />}
                  </div>
                </Route >
              )
            } else {
              return (
                <Route exact path={`/${item.Path}`}>
                  {< item.Component />}
                </Route >
              )
            }
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default memo(App);

