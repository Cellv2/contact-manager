import React, { Component } from "react";

export class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    //without the onChange event handler, this would be a controlled component
    //this means you wouldn't be able to update the input field by typeing as the state is set in stone
    //[e.target.name] accesses the name attr of the HTML element and plugs that in as the key, so provided the name attr and state key are identical, this will work
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter E-Email"
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number"
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-block btn-light"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
