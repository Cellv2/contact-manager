import React, { Component } from "react";
import Contacts from "./components/Contacts.js";
import Header from "./components/Header.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <div className="conatiner">
                    <Contacts />
                </div>
            </div>
        );
    }
}

export default App;
