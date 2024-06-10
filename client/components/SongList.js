import React from "react";
import ggl from "graphql-tag";
import {graphql} from "react-apollo";

class SongList extends React.Component {

    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }

    render() {
        if (!this.props.data.songs) {
            return <div>Loading...</div>;
        }
        return (
            <ul className="collection">
                {this.renderSongs()}
            </ul>
        );
    }
}

console.log(SongList)

const query = ggl`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList);