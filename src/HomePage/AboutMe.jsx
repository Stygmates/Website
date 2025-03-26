import React from 'react';
import TanDat from '../assets/tandat.jpg';
import ReactLogo from '../assets/react.png';
const AboutMe = () => {

    return <div id="aboutme" style={{paddingTop: "25px", paddingBottom: "25px"}}>
        <h2 style={{textAlign: "center"}}>About me</h2>
        <div className='container' style={{ width: '60%'}}><hr/></div>
        <div style={{display: "inline-block", width: "80%", paddingLeft: "50px"}}>
        <h3>Tan Dat Truong</h3>
        <h5>Software engineer</h5>
        <h6>I graduated with a Master's Degree in Computer Sciences in 2019 with a background in Image Processing, I've been working as a frontend/backend engineer for the past 5 years. I have been using Linux and Windows as my operating systems and I'm also familiar with several concepts and tools such as Test Driven Development(PyTest/GoogleTest), Continuous Integration(TravisCI/GitlabCI), and Git.</h6>
        <h6>I created this site using:</h6>
        <div style={{ textAlign: "center"}}>
        <a target="_blank" rel="noopener noreferrer" href="https://en.reactjs.org/"><img alt="React logo" src={ReactLogo} width="150px"/></a>
        </div>
        </div>
        <img src={TanDat} alt="Tan Dat Truong" className="rounded-circle" style={{filter: "grayscale(100%)", display: "inline-block", width:"20%"}}/>
    </div>
}
export default AboutMe;
