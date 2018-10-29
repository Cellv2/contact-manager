import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Contact />
            </div>
        );
    }
}

export default App;
