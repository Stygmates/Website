import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const AddUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoadingSuccessful, setIsLoadingSuccessful] = useState(true);
    const [error, setError] = useState("");

    function AddUserToList(event){
        event.preventDefault();
            var fetchurl = "https://www.tdtruong.com:8080/save?name=" + name + "&email=" + email + "&lastname=" + lastName + "&username=" + userName;
            fetch(fetchurl)
            .then(response => response.text())
            .then((response) => {
                console.log(response)
            })
            .catch(
                err => {
                    setError(err);
                    setIsLoadingSuccessful(false);
                }
            )
    }
    function getStatus(){
      if(!isLoadingSuccessful)
        return <div>Error adding user: {error}</div>
    }
    return (<div id="aboutme" style={{display: "inline-block", alignContent: "center"}}>
        <Form onSubmit={AddUserToList}>
        <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId="lastName">
            <Form.Label>Last name:</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId="userName">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </Form.Group>
        <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        {getStatus()}
        </div>
        )
        
}
export default AddUser;