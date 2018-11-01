import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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

    render() {
        return (
            // the whole state is being passed into 'value'
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
