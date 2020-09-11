import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const tooltipValue = (coronavirusData, countryName, countryCode) => {
  if(typeof coronavirusData[countryCode] === 'undefined')
  {
    return "No data available for the country";
  }
  else
  {
    return (`${countryName} \
                    - New confirmed cases : ${coronavirusData[countryCode].NewConfirmed} \
                    - New deaths: ${coronavirusData[countryCode].NewDeaths} \
                    - New recovered cases: ${coronavirusData[countryCode].NewRecovered}`);    
  }
}

const MapChart = ({ setTooltipContent, coronavirusData }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{maxWidth: "600"}}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A2} = geo.properties;
                    setTooltipContent(<span>{tooltipValue(coronavirusData, NAME, ISO_A2)}</span>);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
