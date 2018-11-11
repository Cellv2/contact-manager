import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {/* 'value' is the same as the prop in the context.provider, which
                passes in the entire state in the context.js file */}
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact </span>
                                List
                            </h1>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
