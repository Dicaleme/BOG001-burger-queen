//https://reactrouter.com/web/guides/quick-start
//npm install react-router-dom
//it manages the single page app 
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Kitchen from "./components/Kitchen";
import Home from "./components/Home";
import OrderStatus from "./components/OrderStatus";

//https://coursetro.com/posts/design/75/Bootstrap-4-Grid-Tutorial//

function App() {
  return (
    <div>
      <Router >
        <div className="container mt-4"> 
          <Switch>
            < Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/kitchen">
              <Kitchen />
            </Route>
            <Route path="/orderstatus">
              <OrderStatus/>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
