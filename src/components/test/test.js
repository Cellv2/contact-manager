//-----
//example file with lifecycle methods
//can only be used within class components - can't be used in functional components
//lifecycle picture: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
//
//LEGACY STUFF: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
//LEGACY STUFF: https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
//-----

import React, { Component } from "react";

export class Test extends Component {
    state = {
        title: "",
        body: ""
    };

    //fires whatever is in the function *after* the components mounts
    //normally used for things like http requests
    componentDidMount() {
        //simply console log it
        // fetch("https://jsonplaceholder.typicode.com/posts/1")
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        //actually add it to state
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    body: data.body
                });
            });
    }

    // /* LEGACY - DON'T USE */
    // //fires whatever is in the function right *before* the component mounts
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    // //fires only when the component is updated (such as state changed)
    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    // }

    // /* LEGACY - DON'T USE */
    // //fires only when the component is updated (such as state changed)
    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }

    // /* LEGACY - DON'T USE */
    // //would be used if you're storing state somehow (for example, with redux) and want to have the next set of props/state
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps");
    // }

    // state = { test: "test" };
    // //basically a replacement for 'componentWillReceiveProps'
    // //must return either some state or null
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return { test: "something" };
    //     return null;
    // }

    // //basically a replacement for 'componentWillReceiveProps'
    // //fires before mutations are make (the DOM is updated)
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate");
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
