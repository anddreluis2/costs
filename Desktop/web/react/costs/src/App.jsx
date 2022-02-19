import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/layouts/Projects'

import Container from './components/layouts/Container'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
