import React, { Component } from "react";
import ggl from "graphql-tag";
import { graphql } from "react-apollo";
import {hashHistory, Link} from "react-router";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    onsubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push("/") );

        this.setState({ title: "" });
    }
    render() {
        return (
            <div>
                <Link onlyActiveOnIndex to="/">Back</Link>
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