import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainMap from '../Map/Map';
import Help from '../Help/Help';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainMap />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
