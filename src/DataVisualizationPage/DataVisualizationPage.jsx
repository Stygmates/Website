import React, {useState,memo} from 'react';
import PopulatedMapChart from './PopulatedMapChart';
import ReactTooltip from 'react-tooltip';
import CancerSurgeryEvolution from './CancerSurgeryEvolution';
import CancerDeathDataProjection from './CancerDeathDataProjection';
import Presentation from './Presentation';

const DataVisualizationPage = () => {
    const [content, setContent] = useState("");
    return (
        <div max-width="50px" max-height="50px" width="50px" height="50px" border="thin solid black" style={{textAlign: "center"}}>

          <div className="bg-light">
          <Presentation/>
          <CancerSurgeryEvolution/>
          <CancerDeathDataProjection/>
          </div>
          <br/>
          <PopulatedMapChart setTooltipContent={setContent} tooltipContent={content}/>
          <ReactTooltip key={content} data-multiline={true}>{content}</ReactTooltip>
        </div>
      );
}

export default memo(DataVisualizationPage);