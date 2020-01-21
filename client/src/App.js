import React from 'react';
import 'bulma/css/bulma.css'
import { useAuth0 } from './contexts/auth0-context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import CharacterIndex from './components/CharacterIndex';
import SpellIndex from './components/SpellIndex';
import ItemIndex from './components/ItemIndex';
import ClassIndex from './components/ClassIndex';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';

function App() {
  const {
    isLoading,
    user,
    loginWithRedirect,
    logout
  } = useAuth0;

  return (
    <>
      <Header/>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={CharacterIndex} />
            <Route path='/spells' component={SpellIndex} />
            <Route path='/items' component={ItemIndex} />
            <Route path='/classes' component={ClassIndex} />
            <Route path='/privacy' component={PrivacyPolicy} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/profile' component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
