import React, {useState} from 'react';
import AddUser from './AddUser';
import SpringPageDescription from './SpringPageDescription';
import UserList from './UserList';
const SpringPage = () => {
    const [userList, setUserList] = useState([]);
    const url = "https://www.tdtruong.com:8080/userlist";
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    function updateUserList() {
        fetch(url)
        .then(result => result.json())
          .then(
            (result) => {
                setIsLoaded(true);
                var tab = [];
                Object.keys(result).forEach(function(key) {tab.push(result[key]);});
                setUserList(tab);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }

      

    return (<div id="springpage" style={{textAlign: "center"}}>
        <SpringPageDescription/>
        <AddUser updateUserList={updateUserList}/>
        <UserList updateUserList={updateUserList} error={error} isLoaded={isLoaded} userList={userList}/>
        </div>)
}
export default SpringPage;