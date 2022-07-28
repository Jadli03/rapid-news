import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

  return (
    <header>
      <Navbar fixed='top' className='navbar'  expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='nav-brand'>Rapid News</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                  <Nav.Link>
                  <i style={{color: 'green', fontSize: '15px'}} className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <Nav.Link>
                  <i style={{color: 'red',fontSize: '15px'}} className="fa-solid fa-user"></i> Sign Up
                  </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header