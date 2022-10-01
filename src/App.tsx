import { memo } from 'react';
import Welcome from './Pages/WelcomePage/component'

function App() {

  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default memo(App);
