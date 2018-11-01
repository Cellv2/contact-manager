import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    //action is an object with a string on what it does
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        default:
            return state;
    }
};

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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
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
