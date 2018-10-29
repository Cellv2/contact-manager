import React, { Component } from "react";

export class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <h1>{contact.name}</h1>
                ))}
            </div>
        );
    }
}

export default Contacts;
