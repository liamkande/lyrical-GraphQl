import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

const SongList = (props) => {
    const { data } = props;

    const renderSongs = () => {
        return data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    };

    if (!data.songs) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul className="collection">
                {renderSongs()}
            </ul>
            <Link
                onlyActiveOnIndex={true}
                to="/songs/new"
                className="btn-floating btn-large red right"
            >
            <i className="material-icons">add</i>
            </Link>
        </div>
    );
};

export default graphql(query)(SongList);