// React
import React            from 'react';
import { render }       from 'react-dom';
import { Router, Route, Link, browserHistory }
                        from 'react-router';

// Tap Event Plugin
import injectTapEventPlugin
                        from 'react-tap-event-plugin';

// Routes
import Main             from './Main.jsx'; // Our custom react components

import Day              from './pages/day.jsx';
import Ambit            from './pages/ambit.jsx';
import Week             from './pages/week.jsx';
import Schedule         from './schedule/components/schedule.jsx'
import Map              from './map/map.jsx';
import Display          from './displayAmbit/displayAmbit.jsx';
import LoginSplash      from './pages/loginSplash.jsx';
// Redux
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import ambits           from './_reducers/ambits.js';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Create redux store
const store = createStore(ambits);

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  //React-Router with nested routes
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route   path='/'         component={LoginSplash}/>
      <Route   path='/map'      component={Map}/>
      <Route                    component={Main}>
        <Route path='/day'      component={Day}/>
        <Route path='/ambit'    component={Ambit}/>
        <Route path='/week'     component={Week}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/display'  component={Display}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
