import React from 'react'
import {Navbar, MainPage, AboutPage, BookFormPage, Footer} from './components/index'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/home' component={MainPage} exact />
        <Route path='/about-us' component={AboutPage} />
        <Route path='/add-book' component={BookFormPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
