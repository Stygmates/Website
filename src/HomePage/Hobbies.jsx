import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import {FaVolleyballBall, FaGamepad, FaDumbbell} from 'react-icons/fa';
import {GiPingPongBat, GiHamburger} from 'react-icons/gi';


const Hobbies = () => {
    const [volleyIsFlipped, setVolleyIsFlipped] = useState(false);
    const [pingPongIsFlipped, setPingPongIsFlipped] = useState(false);
    const [videoGamesIsFlipped, setVideoGamesIsFlipped] = useState(false);
    const [workingOutIsFlipped, setWorkingOutIsFlipped] = useState(false);
    const [burgerIsFlipped, setBurgerIsFlipped] = useState(false);

    return (
        <div id="hobbies" className="bg-light" style={{paddingTop: "25px", paddingBottom: "25px"}}>
            <h2 style={{textAlign: "center"}}>My Hobbies</h2>
            <div className='container' style={{ width: '60%'}}><hr/></div>
            <div style={{display: "inline-block", width: "20%"}}>
            <ReactCardFlip isFlipped={volleyIsFlipped} flipDirection="horizontal">
                <div onMouseEnter={() => setVolleyIsFlipped(!volleyIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaVolleyballBall className="HobbyIcon" style={{fill: "grey"}}/>
                    <h4>Volley Ball</h4>
                </div>
                <div onMouseLeave={() => setVolleyIsFlipped(!volleyIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaVolleyballBall className="HobbyIcon" style={{fill: "blue"}}/>
                    <h4>Volley ball</h4>
                </div>
            </ReactCardFlip>
            </div>

            <div style={{display: "inline-block", width:"20%"}}>
            <ReactCardFlip isFlipped={pingPongIsFlipped} flipDirection="horizontal">
                <div onMouseEnter={() => setPingPongIsFlipped(!pingPongIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <GiPingPongBat className="HobbyIcon" style={{fill: "grey"}}/>
                    <h4>Ping Pong</h4>
                </div>
                <div onMouseLeave={() => setPingPongIsFlipped(!pingPongIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <GiPingPongBat className="HobbyIcon" style={{fill: "red"}}/>
                    <h4>Ping Pong</h4>
                </div>
            </ReactCardFlip>
            </div>

            <div style={{display: "inline-block", width:"20%"}}>
            <ReactCardFlip isFlipped={videoGamesIsFlipped} flipDirection="horizontal">
                <div onMouseEnter={() => setVideoGamesIsFlipped(!videoGamesIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaGamepad className="HobbyIcon" style={{fill: "grey"}}/>
                    <h4>Video Games</h4>
                </div>
                <div onMouseLeave={() => setVideoGamesIsFlipped(!videoGamesIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaGamepad className="HobbyIcon" style={{fill: "black"}}/>
                    <h4>Video Games</h4>
                </div>
            </ReactCardFlip>
            </div>

            <div style={{display: "inline-block", width:"20%"}}>
            <ReactCardFlip isFlipped={workingOutIsFlipped} flipDirection="horizontal">
                <div onMouseEnter={() => setWorkingOutIsFlipped(!workingOutIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaDumbbell className="HobbyIcon" style={{fill: "grey"}}/>
                    <h4>Working out</h4>
                </div>
                <div onMouseLeave={() => setWorkingOutIsFlipped(!workingOutIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <FaDumbbell className="HobbyIcon" style={{fill: "black"}}/>
                    <h4>Working out</h4>
                </div>
            </ReactCardFlip>
            </div>
            
            <div style={{display: "inline-block", width: "20%"}}>
            <ReactCardFlip isFlipped={burgerIsFlipped} flipDirection="horizontal">
                <div onMouseEnter={() => setBurgerIsFlipped(!burgerIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <GiHamburger className="HobbyIcon" style={{fill: "grey"}}/>
                    <h4>Food</h4>
                </div>
                <div onMouseLeave={() => setBurgerIsFlipped(!burgerIsFlipped)} style={{alignItems: "center", textAlign: "center"}}>
                    <GiHamburger className="HobbyIcon" style={{fill: "brown"}}/>
                    <h4>Food</h4>
                </div>
            </ReactCardFlip>
            </div>
        </div>
    )

}
export default Hobbies;