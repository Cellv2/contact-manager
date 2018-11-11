import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts.js";
import AddContact from "./components/contacts/AddContact.js";
import Header from "./components/layout/Header.js";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="conatiner">
                        <AddContact />
                        <Contacts />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
