import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import ContactMe from './components/ContactMe'
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <Router>
    <Header />
    <About />
    <Projects />
    <Skills />
    <Education />
    <ContactMe />
    <Footer />
    <Route path="/" />
    <Route path="/education" />
    <Route path="/projects" />
    <Route path="/skills" />
    <Route path="/contact" />
  </Router>
)

export default App
