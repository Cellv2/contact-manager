import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "12345-123-123"
            },
            {
                id: 2,
                name: "Karin Smith",
                email: "ksmith@gmail.com",
                phone: "09876-098-098"
            },
            {
                id: 3,
                name: "Henry Wut",
                email: "Hwut@gmail.com",
                phone: "12345-098-098"
            }
        ]
    };

    deleteContact = id => {
        //copy state - state is immutable
        const { contacts } = this.state;

        //filter out all contacts that do NOT have the id of the one we're deleting
        const newContacts = contacts.filter(contact => contact.id !== id);

        //set current state's 'contacts' to the filtered out contacts above
        this.setState({ contacts: newContacts });
    };

    render() {
        const { contacts } = this.state;
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
    }
}

export default Contacts;
