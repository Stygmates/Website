import React, {useEffect, useState, memo} from 'react';
import MapChart from './MapChart';
const PopulatedMapChart = ({ setTooltipContent }) => {
    const [coronavirusData, setcoronavirusData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "https://api.covid19api.com/summary";
  
    const extractData = (data) => {
      var result = {}
      data.map((country) => result[country.CountryCode] = {Country: country.Country, NewConfirmed:country.NewConfirmed, NewDeaths: country.NewDeaths, NewRecovered: country.NewRecovered});
      return result;
    }
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setcoronavirusData(extractData(result.Countries));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
      if(error) {
        return <div>Erreur: {error.message}</div>
      }
      else if(!isLoaded)
      {
        return (<div id="coronavirus" className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>)
      }
      else
      {
          return (<div id="coronavirus">
            <h2>Map presenting the number of new cases, deaths and recovered coronavirus cases updated daily</h2>
            <div className='container' style={{ width: '60%'}}><hr/></div>
            <MapChart setTooltipContent={setTooltipContent} coronavirusData={coronavirusData}/>
            <div><p>The data used by this map were fetched directly from <a href='https://www.covid19api.com'>covid19api.com</a>.</p></div>
            </div>);
      }
    }
export default memo(PopulatedMapChart);