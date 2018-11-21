import React, { Component } from "react";
import axios from "axios";

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
        case "ADD_CONTACT":
            return {
                ...state, //gets initial state
                contacts: [action.payload, ...state.contacts] //adds new contact at the front of the array
            };
        case "UPDATE_CONTACT":
            return {
                ...state, //gets initial state
                contacts: state.contacts.map(
                    contact =>
                        contact.id === action.payload.id //if the contact ID is the same as the payload ID. .id comes from JSONplaceholder automatically
                            ? (contact = action.payload) //set the contacts state data to be the data in the payload (from axios)
                            : contact //else just return the existing contact
                )
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    async componentDidMount() {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        this.setState({ contacts: res.data });
    }

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
