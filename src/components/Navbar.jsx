import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Navibar = () => {
  return (


    <>

    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">My Blog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">@Vyshnav</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Navibar