import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import BreakfastMenu from "./Breakfast";
import LunchMenu from "./Lunch";

export const Item = () => {
    const [datos, setDatos] = useState({        
        client: "",        
    });
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };
    const sendData = (event) => {
        event.preventDefault();

    };
    //https://getbootstrap.com/docs/4.0/utilities/spacing/
    //notations from Bootstrap that define example mt (margin-top...)
    return (
        <Fragment>
            <div className="item1">
                <form className="row mt-3" onSubmit={sendData}>                    
                    <div className="col">
                        <input
                            placeholder="Client name"
                            className="form-control form-control-sm"
                            type="text"
                            name="client"
                            onChange={handleInputChange}
                        ></input>
                    </div>                    
                    <div className="col">
                        <button className="btn btn-dark" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <div>
                    <Router >
                        <div className="container mt-2">
                            <div className="btn-group">
                                <Link to="/BreakfastMenu" className="btn btn-secondary">Breakfast Menu</Link>
                                <Link to="/LunchMenu" className="btn btn-secondary">Lunch Menu</Link>
                            </div>
                            <Switch>
                                <Route path="/BreakfastMenu" exact>
                                    <BreakfastMenu clientName={datos.client} />
                                </Route>
                                <Route path="/LunchMenu" exact>
                                    <LunchMenu clientName={datos.client} />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </Fragment>
    )
}
export default Item;
