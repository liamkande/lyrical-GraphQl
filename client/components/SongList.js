import React from "react";
import ggl from "graphql-tag";
import { graphql } from "react-apollo";

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
        <ul className="collection">
            {renderSongs()}
        </ul>
    );
};

const query = ggl`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList);