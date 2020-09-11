import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { SiGooglescholar } from 'react-icons/si';
import UnistraLogo from '../assets/unistra.svg';
import LilleLogo from '../assets/lille.png';
import DavidsonLogo from '../assets/davidson.png';
import IGBMCLogo from '../assets/IGBMC.png';

const DiplomaTimeline = () => {
    return (
            <div id="educationandworkexperience" className="bg-light">
            <h2 style={{textAlign: "center"}}>Education & Work experience</h2>
            <div className='container' style={{ width: '60%'}}><hr/></div>
            <br/>
            <VerticalTimeline>
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'blue', color: '#fff' }}
            date='September 2019 - present'
            icon={<BsFillBriefcaseFill />}>
                <div className='container-fluid' style={{textAlign: "center"}}><a target="_blank" rel="noopener noreferrer" href="https://www.davidson.fr"><img alt="Davidson" src={DavidsonLogo} style={{width: "120px"}}/></a><hr/>
                <h5>Software Engineer consultant working for Euro Information Presse since November 2019</h5>
                <p>Currently maintaining and adding new features to the user profiles and the shops of the Ebra Group's news websites such as <a target="_blank" rel="noopener noreferrer" href="https://www.dna.fr/">"Les Dernières Nouvelles d'Alsace"</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.leprogres.fr/">"Le Progrès"</a></p>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'grey', color: '#fff' }}
            icon= {<SiGooglescholar/>}
            date='Mai 2020'>
                <div className='container-fluid' style={{textAlign: "center"}}><a target="_blank" rel="noopener noreferrer" href="https://centralelille.fr/"><img alt="Centrale Lille"src={LilleLogo} style={{width: "120px"}}/></a><hr/>
                    <h5>Project Management MOOC</h5>
                    <p>MOOC presenting the different concepts involved in the management of a project, such as the stakeholders, the risks and the opportunities that arise when managing a project</p>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'grey', color: '#fff' }}
            icon= {<SiGooglescholar/>}
            date='2017 - 2019'>
                <div className='container-fluid' style={{textAlign: 'center'}}><a target='_blank' rel='noopener noreferrer' href='https://mathinfo.unistra.fr/'><img alt="Université de Strasbourg" src={UnistraLogo} style={{width: "120px"}}/></a><hr/>
                <h5>Master's degree in Computer Sciences</h5>
                <p>Master's degree "Informatique et Sciences de l'Image (ISI)" specialized in Image Processing </p>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'grey', color: '#fff' }}
            icon= {<SiGooglescholar/>}
            date='Summer 2018'>
                <div className='container-fluid' style={{textAlign: 'center'}}><a target='_blank' rel='noopener noreferrer' href='http://www.igbmc.fr/'><img alt="Institut de Génétique et Biologie moléculaire et cellulaire" src={IGBMCLogo} style={{width: "120px"}}/></a><hr/>
                <h5>Continuous Integration Intern</h5>
                <p> Developed a Continuous Integration tool similar to TravisCI, in Crystal</p>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'grey', color: '#fff' }}
            icon= {<SiGooglescholar/>}
            date='Summer 2017'>
                <div className='container-fluid' style={{textAlign: 'center'}}><a target='_blank' rel='noopener noreferrer' href='http://www.igbmc.fr/'><img alt="Institut de Génétique et Biologie moléculaire et cellulaire" src={IGBMCLogo} style={{width: "120px"}}/></a><hr/>
                <h5>Python Developper Intern</h5>
                <p>Developed an application in Python to manage and visualize images acquired by their microscope.</p>
                </div>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
            contentStyle={{color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid grey' }}
            iconStyle={{ background: 'grey', color: '#fff' }}
            icon= {<SiGooglescholar/>}
            date='2012 - 2016'>
                <div className='container-fluid' style={{textAlign: "center"}}><a target="_blank" rel="noopener noreferrer" href="https://mathinfo.unistra.fr/"><img alt="Université de Strasbourg" src={UnistraLogo} style={{width: "120px"}}/></a><hr/>
                <h5> Bachelor's degree in Computer Sciences</h5>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    );
}

export default DiplomaTimeline;