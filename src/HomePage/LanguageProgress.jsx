import React from 'react';
import { Progress } from 'semantic-ui-react';
const LanguageProgress = () => {
    return <div id="languages" style={{textAlign: "center"}}>
        <h2>Languages</h2>
        <div className='container' style={{ width: '60%'}}><hr/></div>
        <div style={{ width: "70%", display: "inline-block"}}>
            <h3>French:</h3>
            <h5>Native</h5>
            <Progress percent={100} color="grey" active/>
        </div>
        <div style={{ width: "70%", display: "inline-block"}}>
            <h3>English:</h3>
            <h5>Professional working proficiency</h5>
            <Progress percent={80} color="grey" active/>
        </div>
        <div style={{ width: "70%", display: "inline-block"}}>
            <h3>Vietnamese:</h3>
            <h5>Mother tongue</h5>
            <Progress percent={80} color="grey" active/>
        </div>
        </div>
        
}
export default LanguageProgress;