import { memo } from 'react';
import './style.css'
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/component";
// import Footer from "./components/Footer/component";
import { PageRoutes } from "./global/Route";

const App = () => {

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
                  {/* <Footer /> */}
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

