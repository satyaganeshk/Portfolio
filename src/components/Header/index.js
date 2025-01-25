import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './index.css'

function Header() {
  return (
    <Navbar
      expand="lg"
      className=" bg-purp transparent-element"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#about">
          <div className="d-flex align-items-center">
            <img
              src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1735558846~exp=1735562446~hmac=d46fb34d0115422a5dca2670429aa93df132497bc8d7097bfaa4f7467466ce36&w=740"
              className="user-icon"
              alt="profile"
            />
            <p className="m-2 text-white">Portfolio</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/satyaganeshkamireddy/"
              target="_blank"
            >
              <button type="button" className="btn-gradien text-white">
                LinkedIn
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
