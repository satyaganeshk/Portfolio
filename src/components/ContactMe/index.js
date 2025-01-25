import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const ContactMe = () => (
  <div id="contact" className="min-vh-100">
    <h1 className="text-center m-1 h1 mt-3 p-1">Contact Me</h1>
    <div className=" d-flex align-items-center slide-in">
      <div className="m-auto w-60">
        <div className="d-flex flex-column align-items-center bg-purples border ">
          <div className="text-center">
            <h1>Thank You for Visiting!</h1>
            <h2>
              I truly appreciate you taking the time to explore my portfolio. If
              you’d like to connect, collaborate, or just say hello, feel free
              to drop a message. I’d love to hear from you!
            </h2>
          </div>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/satyaganeshkamireddy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon1 m-3" />
            </a>
            <a
              href="https://github.com/satyaganeshk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon1 m-3" />
            </a>
            <a href="mailto:satyaganeshkamireddy@gmail.com?subject=Let's Connect&body=Hi, I visited your portfolio and would like to get in touch.">
              <FontAwesomeIcon icon={faEnvelope} className="icon1 m-3" />
            </a>
            <a
              href="https://wa.me/7075828707?text=Hi%20there,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="icon1 m-3 text-success fa-beat"
              />
            </a>
            <a href="satyaganeshkamireddy@gmail.com" target="_blank">
              <p>satyaganeshkamireddy@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactMe
