import { memo } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideMenu from "@components/side-bar";
import { PageRoutes } from "@commons/global";
import { Main, Content } from "./styled";
import Header from "@components/header";
import Flex from "@commons/flex";

const App = () => {
  return (
    <BrowserRouter>
      {PageRoutes.map(({ Path, Component }) => {
        return (
          <Route exact path={Path} key={Path.toString()}>
            {!Array.isArray(Path) ? (
              <Flex height="100vh" flexDirection="column" bordered>
                <Header />
                <Main>
                  <SideMenu />
                  <Content>
                      <Component />
                  </Content>
                </Main>
              </Flex>
            ) : (
              <Component />
            )}
          </Route>
        );
      })}
    </BrowserRouter>
  );
};

export default memo(App);
