import { memo } from 'react';
import Welcome from './Pages/WelcomePage/component';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import Customers from './Pages/Customers/component';
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/customers" component={Customers} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default memo(App);

