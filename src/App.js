import React, { Component } from "react";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <Contact name="John Doe" email="jdoe@gmail.com" phone="12345-123-123" />
                <Contact name="Karin Smith" email="ksmith@gmail.com" phone="09876-098-098" />
            </div>
        );
    }
}

export default App;
