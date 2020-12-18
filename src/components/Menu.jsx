import React, { Fragment } from "react";
import "../css/index.css";
import Item from "./Item";
import { Link } from "react-router-dom";

//https://es.reactjs.org/docs/fragments.html
//Fragments allow to add a list of children without adding extra nodes to the DOM
const Menu = () => {
    return (
        <Fragment>
        <div className="menu1">
            <div className="btn-group" >
            <Link to="/menu" className="btn btn-danger">Menu</Link>
            <Link to="/kitchen" className="btn btn-warning">Kitchen</Link>
            <Link to="/orderstatus" className="btn btn-success">Orders Status</Link>
            </div>
            <Item />
        </div>
        </Fragment>
    );
};

export default Menu;
