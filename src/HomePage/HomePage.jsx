import React from 'react';
import AboutMe from './AboutMe';
import DiplomaTimeline from './DiplomaTimeline';
import Hobbies from './Hobbies';
import LanguageProgress from './LanguageProgress';
import ProjectsTimeline from './ProjectsTimeline';

const HomePage = () => {
    return (
        <div>
            <AboutMe/>
            <DiplomaTimeline/>
            <ProjectsTimeline/>
            <LanguageProgress/>
            <Hobbies/>
        </div>
    )
}

export default HomePage;