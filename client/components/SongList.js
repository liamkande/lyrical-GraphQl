import React, { Component } from "react";
import ggl from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import "../style/style.css";

class SongList extends Component {
    constructor(props) {
        super(props);

        this.onSongDelete = this.onSongDelete.bind(this);
        this.renderSongs = this.renderSongs.bind(this);
    }

    onSongDelete(id) {
        this.props
            .mutate({ variables: { id } })
            .then(() => this.props.data.refetch());
    }

    renderSongs() {
        const { data } = this.props;
        if (!data.songs) return null;

        return data.songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className="material-icons" onClick={() => this.onSongDelete(id)}>
                        delete
                    </i>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className="collection">{this.renderSongs()}</ul>
                <Link
                    onlyActiveOnIndex={true}
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const mutation = ggl`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));