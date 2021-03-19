import logo from './logo.svg';
import React from 'react'
import Hire from './page/Hire'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import GlobalFont from './components/font/blanka'


function App() {
  return (
    <BrowserRouter>
      <GlobalFont/>
        <Route exact path = "/" component = {Hire}></Route>
    </BrowserRouter>
  );
}

export default App;
