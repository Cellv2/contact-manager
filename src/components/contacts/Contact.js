import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    //if you use async with an arrow function, the async must be before the params, else you will get an error
    //async onDeleteClick = (id, dispatch) => {
    onDeleteClick = async (id, dispatch) => {
        //NOTE:try/catch is only here to make this application work
        //as we are using JSONplaceholder, new contacts will not actually get added to their DB
        //this means that we can't delete anything from the DOM, either, as the DELETE request fails. The try/catch solves this
        try {
            //no need to assign to var, response is just an empty object for deletion
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); //template literal to allow id of user
            dispatch({ type: "DELETE_CONTACT", payload: id });
        } catch(exception) {
            dispatch({ type: "DELETE_CONTACT", payload: id });
        }

    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    onClick={this.onShowClick}
                                    className="fas fa-sort-down"
                                    style={{ cursor: "pointer" }}
                                />
                                <i
                                    className="fas fa-times"
                                    style={{
                                        cursor: "pointer",
                                        float: "right",
                                        color: "red"
                                    }}
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                />
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
