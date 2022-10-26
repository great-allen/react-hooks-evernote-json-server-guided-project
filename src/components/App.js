import React from "react";
import ContactUs from "./ContactUs";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import NavBar from "./NavBar";



function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      
      <Switch>
        <Route exact path="/contactUs">
        <ContactUs />
        </Route>
        <Route  exact path="/">
        <NoteContainer/>
        </Route>
        
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;
