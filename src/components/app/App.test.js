import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from './App'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Blog from '../blog/Blog'
import '../../index.css'

const App = () => (
  <Router>
    <Container>
      <Switch>
        <Route exact strict path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </Container>
  </Router>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
