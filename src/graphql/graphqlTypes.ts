import gql from "graphql-tag";

export const GET_ALL_RES = gql`
  query GET_ALL_RES {
    restaurants {
      id
      name
      description
      likes
    }
  }
`;
