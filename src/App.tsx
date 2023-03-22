import { memo, useEffect } from 'react';
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from "./components/SideBar/component"
import { PageRoutes } from "./global/Route";
import { useTranslation } from 'react-i18next'
//@ts-ignore
import cookies from 'js-cookie';
import Flex from './components/Flex/Flex';
import Top from './components/top/Top';

const App = () => {
  const languages = [
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
                  <Flex width='100%' height='100vh' margin='0' padding='0' borderRadius='0' >
                    <Flex width='15%' padding='0' margin='0'>
                      <SideBar />
                    </Flex>
                    <Flex width='85%' flexDirection="column">
                      <Flex height="50px" margin='0' padding='0'>
                        <Top />
                      </Flex>
                      <Flex height='95%' >
                        {< item.Component />}
                      </Flex>
                    </Flex>
                  </Flex>
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
    </div >
  );
}

export default memo(App);

