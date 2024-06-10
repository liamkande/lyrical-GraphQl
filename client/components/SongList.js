import React from "react";
import ggl from "graphql-tag";
import {graphql} from "react-apollo";

class SongList extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                SongList
            </div>
        );
    }
}

console.log(SongList)

const query = ggl`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);