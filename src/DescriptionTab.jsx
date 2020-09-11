import React, {useState, useEffect} from 'react';
import Logo from "./tandat.jpg";

const DescriptionTab = () => {
    const url = "http://localhost:8080/getdescription";
    const [description, setDescription] = useState([]);
    const [title, setTitle] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    function getDescriptionText(line, index) {
      const reactStringReplace = require('react-string-replace');
      var result = reactStringReplace(line, "https://www.igbmc.fr", (match, i) => (
        <a key={match + i} href={match}>IGBMC</a>
      ));
      return <p key={index}>{result}</p>;
    }

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
          .then(
            (result) => {
                console.log(result);
                setIsLoaded(true);
                setDescription(result.description);
                setTitle(result.title);
                console.log(result.title);
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
          return (<div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>)
        }
        else
        {
//          return (<div>{description.map((line, index) => <p key={index}>{line}</p>)}</div>);

            var desc = description.map((line, index) => getDescriptionText(line, index));

            return (
              <div className="card mb-3" style={{maxWidth: "1000px", alignContent: "center", justifyContent: "center"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={Logo} className="card-img"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">About me</h5>
                      <div>{desc}</div>
                    </div>
                  </div>
                </div>
              </div>
                  );
        }
        
}

export default DescriptionTab;