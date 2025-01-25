import 'bootstrap/dist/css/bootstrap.min.css'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './index.css'

const Footer = () => (
  <footer className="footer">
    <nav className="footer-navigation text-white ">
      <a href="#about" className="anchor">
        About
      </a>
      <a className="anchor" href="#education">
        Education
      </a>
      <a className="anchor" href="#projects">
        Projects
      </a>
      <a href="#skills" className="anchor">
        Skills
      </a>
      <a className="anchor" href="#contact">
        Contact
      </a>
    </nav>
    <p className="footer-text">
      &copy; {new Date().getFullYear()} <strong>Kamireddy Satya Ganesh</strong>.
      All rights reserved.
    </p>
    <ul className="footer-links">
      <li>
        <a
          href="https://www.linkedin.com/in/satyaganeshkamireddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon1" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/satyaganeshk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon1" />
        </a>
      </li>
      <li>
        <a href="mailto:satyaganeshkamireddy.@email.com">Email</a>
      </li>
    </ul>
  </footer>
)

export default Footer
