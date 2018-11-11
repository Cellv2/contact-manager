import React, { Component } from "react";
import uuid from "uuid";

import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

export class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    //without the onChange event handler, this would be a controlled component
    //this means you wouldn't be able to update the input field by typeing as the state is set in stone
    //[e.target.name] accesses the name attr of the HTML element and plugs that in as the key, so provided the name attr and state key are identical, this will work
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    //dispatch was bound into the onSubmit fn, meaning we can use it in there
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        //check for errors
        //object will be blank if no errors, so error will not show
        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "E-Mail is required" } });
            return;
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone Number is required" } });
            return;
        }

        //ES6 syntax, if key and value are the same, you don't need to do name:name, email:email etc.
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: "ADD_CONTACT", payload: newContact });

        //clear state on form submit
        this.setState({ name: "", email: "", phone: "", errors: {} });

        this.props.history.push("/"); //redirect to home page on push
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    {/* do not need to pass in type for anything other than email as text is the default for type */}
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="E-Mail"
                                        name="email"
                                        type="email"
                                        placeholder="Enter E-Mail"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-block btn-light"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
