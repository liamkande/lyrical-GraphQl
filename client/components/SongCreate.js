import React, { Component } from "react";
import ggl from "graphql-tag";
import { graphql } from "react-apollo";
import {hashHistory} from "react-router";

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    onsubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: { title: this.state.title }
        }).then(() => hashHistory.push("/") );

        this.setState({ title: "" });
    }
    render() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onsubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}
const mutation = ggl`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            title
        }
    }
`;

export default graphql(mutation) (SongCreate);