import './styles/antd.less';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import SimplePage from './pages/SimplePage';
import SimplePageDetail from './pages/SimplePageDetail';
import SubmenuDetail1 from './pages/SubmenuDetail1';
import SubmenuDetail2 from './pages/SubmenuDetail2';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simplepage" element={<SimplePage />} />
          <Route path="/simplepage/:id" element={<SimplePageDetail />} />
          <Route path="/submenu/submenu1" element={<SubmenuDetail1 />} />
          <Route path="/submenu/submenu2" element={<SubmenuDetail2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
