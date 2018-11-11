import React, { Component } from "react";

//this is an uncontrolled component example - the input is not connected with state
//it uses props with defaultValue (rather than value) and refs in order to get information
//good for default values (e.g. if you're using Redux and need something there but not tied to state)

export class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        };
        console.log(contact);
    };

    static defaultProps = {
        name: "Tester1",
        email: "testEmail1@test.com",
        phone: "123-456-7890"
    };

    render() {
        const { name, email, phone } = this.props;
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
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter E-Email"
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number"
                                defaultValue={phone}
                                ref={this.phoneInput}
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
