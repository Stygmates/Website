import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Banner from './assets/banner.png';
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication


const Header = () => {
  
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  function SignInButton() {
    if(!isSignedIn)
    {
      return <Nav><Nav.Link style={{borderRadius: "10px", borderColor: "grey", borderWidth: "1px", borderStyle: "solid"}} href="/firebase">Log In</Nav.Link></Nav>;
    }
    else
    {
      return <Nav><div className="navbar-brand">{firebase.auth().currentUser.displayName}</div> <Nav.Link style={{borderRadius: "10px", borderColor: "grey", borderWidth: "1px", borderStyle: "solid"}} onClick={() => firebase.auth().signOut()}>Sign Out</Nav.Link></Nav>;
    }
  }
    return (
    <Navbar style={{backgroundColor: "WhiteSmoke"}} expand="lg">
    <Navbar.Brand href="/"><img alt="Tan Dat Truong" src={Banner} width = "110px" style={{  filter: "grayscale(100%)"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="custom-navbar">
        <NavDropdown title="Home" id="dropdown-home">
          <NavDropdown.Item href="/#aboutme">About me</NavDropdown.Item>
          <NavDropdown.Item href="/#educationandworkexperience">Education & Work Experience</NavDropdown.Item>
          <NavDropdown.Item href="/#projects">Projects</NavDropdown.Item>
          <NavDropdown.Item href="/#languages">Languages</NavDropdown.Item>
          <NavDropdown.Item href="/#hobbies">Hobbies</NavDropdown.Item>
        </NavDropdown>
        {/* <NavDropdown title="Data visualization" id="dropdown-data-visualization">
          <NavDropdown.Item href="/datavisualization">Presentation</NavDropdown.Item>
          <NavDropdown.Item href="/datavisualization#cancersurgeryevolution">Cancer surgery evolution</NavDropdown.Item>
          <NavDropdown.Item href="/datavisualization#cancerdeathdataprojection">Cancer deaths data projection</NavDropdown.Item>
          <NavDropdown.Item href="/datavisualization#coronavirus">Coronavirus</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/spring">Spring boot</Nav.Link> */}
        {/* <Nav.Link href="/fastapi">Fast API</Nav.Link> */}
        <Nav.Link style={{borderRadius: "10px", borderColor: "grey", borderWidth: "1px", borderStyle: "solid"}} href="mailto:admin@tdtruong.com">Contact me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    {/* {SignInButton()} */}
  </Navbar>
  );
}

export default Header;