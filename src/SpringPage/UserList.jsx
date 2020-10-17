import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const UserList = ({updateUserList,userList, error, isLoaded}) => {

  useEffect(() => updateUserList(),[updateUserList])
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
          return (<div>
            <h1> Saved users </h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Last name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                  {userList.map(user =><tr key={user.userName}><td>{user.userName}</td><td>{user.name}</td><td>{user.lastName}</td><td>{user.email}</td></tr>)}
              </tbody>
            </Table>
          </div>)
        }
        
}

export default UserList;