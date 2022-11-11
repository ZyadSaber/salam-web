import { memo } from 'react';
import SignInPage from './Pages/SignInPage/component';
import Customers from './Pages/Customers/component';
import Home from './Pages/Home/component';
import Suppliers from './Pages/Suppliers/component';
import Items from "./Pages/Items/component";
import EmployeesData from "./Pages/EmployeesData/component"
import './style.css'
//@ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/customers" component={Customers} />
          <Route path="/home" component={Home} />
          <Route path="/suppliers" component={Suppliers} />
          <Route path="/items" component={Items} />
          <Route path="/employeeData" component={EmployeesData} />
        </Switch>
      </Router>
    </div>
  );
}

export default memo(App);

