import React, {useEffect, useState} from 'react';

const FastAPIPage = () => {
    
    const url = "https://www.tdtruong.com:8000";
    const [description, setDescription] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(result => result.json())
          .then(
            (result) => {
                setIsLoaded(true);
                setDescription(result);
                console.log(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    return (
        <div>
            Hello world
        </div>
    )
}

export default FastAPIPage;