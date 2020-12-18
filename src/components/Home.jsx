import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../img/Logo.png"
import "../css/home.css";

//https://es.reactjs.org/docs/fragments.html
//Fragments allow to add a list of children without adding extra nodes to the DOM
const Index = () => {
    return (
        <Fragment>            
            <div className="contenedor">
            <div className="contenedorLogo">
            <img src={Logo} className="logoPrincipal" alt=""/>
            </div>
            <Link to="/menu" className="btn btn-warning btn-lg">Order Now</Link>
            </div>
        </Fragment>
    )
}

export default Index;