import React, {useState} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';



const Tab = ({name, activeTab}) => {
    const [tab, setTab] = useState("nav-link");

    const handleClick = () => {
        setTab("nav-link active");
    }

    return <li className="nav-item" onClick={handleClick}>
    <a className={tab} href="#">{name}</a>
    </li>;

};

export default Tab;