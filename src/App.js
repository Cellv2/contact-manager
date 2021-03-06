import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts.js";
import AddContact from "./components/contacts/AddContact.js";
import EditContact from "./components/contacts/EditContact.js";
import Header from "./components/layout/Header.js";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Test from "./components/test/test";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="conatiner">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/test" component={Test} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
