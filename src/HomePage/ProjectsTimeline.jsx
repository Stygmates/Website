import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { SiTravisci } from 'react-icons/si';
import { FaTools, FaJava } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const ProjectsTimeline = () => {


    return (
        <div id="projects">
        <h2 style={{textAlign: "center"}}>Projects</h2>
        <div className='container' style={{ width: '60%'}}><hr/></div>
        <h3 style={{textAlign: "center"}}>Here are some of the projects I've been working on in the recent past, available on github.</h3>
        <br/>
        <VerticalTimeline>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        contentStyle={{color: 'black', backgroundColor: 'WhiteSmoke'}}
        contentArrowStyle={{ borderRight: '7px solid grey' }}
        date='August 2020 - Present'
        iconStyle={{ background: 'grey', color: '#fff' }}
        icon= {<FaTools/>}>
            <div className='container-fluid' style={{textAlign: "center"}}>
            <h5>Frontend using React</h5>
            <p>This is the source code for the site you are looking at.</p>
            <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Stygmates/Website" bgColor="grey" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        contentStyle={{color: 'black', backgroundColor: 'WhiteSmoke'}}
        contentArrowStyle={{ borderRight: '7px solid grey' }}
        iconStyle={{ background: 'grey', color: '#fff' }}
        icon= {<FaTools/>}
        date='September 2018-January 2019'>
            <div className='container-fluid' style={{textAlign: "center"}}>
                <h5>Raytracing implementation project</h5>
                <p>Implemented the raytracing concept in C++, also uses TravisCI<a href="https://travis-ci.org/"><SiTravisci/></a>.</p>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Stygmates/raytracing" bgColor="grey" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        contentStyle={{color: 'black', backgroundColor: 'WhiteSmoke'}}
        contentArrowStyle={{ borderRight: '7px solid grey' }}
        iconStyle={{ background: 'grey', color: '#fff' }}
        icon= {<FaTools/>}
        date='April 2016'>
            <div className='container-fluid' style={{textAlign: 'center'}}>
            <h5>A teamviewer/parsec like program to take control of a remote computer, in Java<FaJava/></h5>
            <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Stygmates/projetSD" bgColor="grey" style={{width: "40px", height: "40px", marginRight: "10px"}}/>
            </div>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>);
}

export default ProjectsTimeline;