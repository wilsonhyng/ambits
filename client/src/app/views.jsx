// React
import React            from 'react';
import {render}         from 'react-dom';
import {Router, Route, Link, browserHistory}
                        from 'react-router';

// Tap Event Plugin
import injectTapEventPlugin
                        from 'react-tap-event-plugin';

// Routes
import Main             from './Main.jsx'; // Our custom react components

import CheckinContainer from './checkin/components/checkinContainer.jsx';


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  //React-Router with nested routes
  <Router history={browserHistory}>
    <Route component={Main}>

      <Route path='/'         component={CheckinContainer}/>

    </Route>
  </Router>

);
