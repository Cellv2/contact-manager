import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export class Contacts extends Component {
    deleteContact = id => {
        //copy state - state is immutable
        const { contacts } = this.state;

        //filter out all contacts that do NOT have the id of the one we're deleting
        const newContacts = contacts.filter(contact => contact.id !== id);

        //set current state's 'contacts' to the filtered out contacts above
        this.setState({ contacts: newContacts });
    };

    render() {
        return (
            <Consumer>
                {/* 'value' is the same as the prop in the context.provider, which
                passes in the entire state in the context.js file */}
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                    deleteClickHandler={this.deleteContact.bind(
                                        this,
                                        contact.id
                                    )}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
