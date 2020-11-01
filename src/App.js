import React from 'react'
import {Navbar, MainPage, AboutPage, Footer} from './components/index'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/about-us' component={AboutPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
