import { memo, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from "@components/side-bar"
import { PageRoutes } from "@commons/global";
import { useTranslation } from 'react-i18next'
//@ts-ignore
import cookies from 'js-cookie';
import Flex from "@commons/flex";
import Header from '@components/header';
// import Error404 from './error404';
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
    <>
      <BrowserRouter>
        {PageRoutes.map(({ Path, Component }) => {
          return (
            <Route
              exact
              path={Path}
              key={Path.toString()}
            >
              {
                !Array.isArray(Path) ?
                  <Flex width='100%' height='100vh' margin='0' padding='0' borderRadius='0' >
                    <Flex width='15%' padding='0' margin='0'>
                      <SideBar />
                    </Flex>
                    <Flex width='85%' flexDirection="column">
                      <Flex height="50px" margin='0' padding='0'>
                        <Header />
                      </Flex>
                      <Flex height='95%' >
                        {< Component />}
                      </Flex>
                    </Flex>
                  </Flex>
                  :
                  <Component />
              }
            </Route>
          );
        })}
      </BrowserRouter>
    </>
  );
}

export default memo(App);

