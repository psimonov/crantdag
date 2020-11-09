import './styles/main.sass';
import './styles/antd.less';

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import SimplePage from './pages/SimplePage';
import SimplePageDetail from './pages/SimplePageDetail';
import SubmenuDetail1 from './pages/SubmenuDetail1';
import SubmenuDetail2 from './pages/SubmenuDetail2';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/simplepage/:id" component={SimplePageDetail} />
        <Route path="/simplepage" component={SimplePage} />
        <Route path="/submenu/submenu1" component={SubmenuDetail1} />
        <Route path="/submenu/submenu2" component={SubmenuDetail2} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
