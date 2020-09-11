import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaReact } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';

const Footer = () => {
    return (
    <Navbar className="justify-content-center flex-column" style={{backgroundColor: "WhiteSmoke"}} expand="lg">
      <Nav.Item>Site created by <strong>Truong Tan Dat</strong> using <FaReact/> and <BsBootstrap/></Nav.Item>
      <div>
      <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/tan-dat-truong/" bgColor="grey" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
      <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Stygmates" bgColor="grey" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
      <SocialIcon url="mailto:admin@tdtruong.com" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
      </div>
  </Navbar>
  );
}

export default Footer;