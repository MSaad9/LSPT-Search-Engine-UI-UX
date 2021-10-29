import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SearchPage } from './containers/SearchPage/SearchPage';
import { ResultsPage } from './containers/ResultsPage/ResultsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SearchPage/>
        </Route>
        <Route exact path="/search">
          <ResultsPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
