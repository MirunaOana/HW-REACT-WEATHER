import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Weather from './Weather';

function App() {
  return (
    <div>

      <Router>

        <Nav />

        <Route exact path="/" component={() => <h1>Homepage</h1>}/>
        <Route exact path="/games" component={() => <h2>Games</h2>} />
        <Route exact path="/weather" component={Weather} />

      </Router>

    </div>
  );
}

export default App;
