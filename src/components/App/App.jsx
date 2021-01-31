import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicMap from '../PublicMap/PublicMap';
import Help from '../Help/Help';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PublicMap 
              api={this.props.api} 
              OSMLayer={this.props.OSMLayer}  
              WMSLayer={this.props.WMSLayer} />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
