import ggl from "graphql-tag";

export default ggl`
    query SongQuery($id: ID!) {
        song(id: $id) {
            id
            title
        }
    }
`;