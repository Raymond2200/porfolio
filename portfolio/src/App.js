import './App.css';
import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Switch>
          <Route path='/contact' render={(props) => (
              <ContactPage {...props}/>
            )}/>
          <Route path='/' render={(props) => (
              <HomePage {...props}/>
            )}/>
        </Switch>
      </div>
  )}
}

export default App;
