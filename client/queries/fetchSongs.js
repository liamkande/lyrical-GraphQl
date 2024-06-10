import ggl from "graphql-tag";

export default ggl`
    {
        songs {
            id
            title
        }
    }
`;