import React from 'react';
const SpringPageDescription = () => {

    return <div id="SpringPageDescription">
        <h2 style={{textAling: "center", paddingTop: "25px", paddingBottom: "25px"}}>About this page</h2>
        <div className='container' style={{ width: '60%'}}><hr/></div>
        <div style={{display: "inline-block", width: "80%", paddingLeft: "50px"}}>
        <h5>This page presents my experiments with spring boot: The React front end interacts with the Spring boot back end, as of now, we can interact with it by adding users to an HashMap with the Username as key.
            It is stored on the Spring boot server side. The list of saved users is then fetched from the Spring boot server once the form is sent.</h5>
        </div>
        <br/>
    </div>
}
export default SpringPageDescription;