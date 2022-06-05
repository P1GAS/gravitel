import { gql } from "@apollo/client";

const GET_DASHBOARDS = gql`
  query GetDashboards {
    dashboard {
      scenarios {
        active
        inactive
        completed
      }
      lists {
        active
        inactive
        completed
      }
      dialogs {
        active
        inactive
        completed
      }
    }
  }
`;

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export { GET_DASHBOARDS, LOGIN };
