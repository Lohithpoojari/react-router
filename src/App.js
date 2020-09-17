import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import Home from "./Home";
import CategoryDetail from './CategoryDetail';
import Banners from './Banners';
import BannerDetail from './BannerDetail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div> 
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id"  component={CategoryDetail} />
          <Route path="/banners" exact component={Banners} />
          <Route path="/banners/:id" component={BannerDetail} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
