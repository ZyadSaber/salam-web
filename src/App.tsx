import React, { memo } from 'react';
import SignInPage from './Pages/SignInPage/component';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import Customers from './Pages/Customers/component';
import Home from './Pages/Home/component';
import './style.css'
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/customers" component={Customers} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default memo(App);
