import React from "react";
import gql from "graphql-tag";
import { Subscription } from "react-apollo";

const Rankings = gql`
  subscription Rankings {
    people(orderBy: RANKING_DESC) {
      nodes {
        id
        name
        ranking
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Subscription subscription={Rankings}>
        {({ data, loading }) => (
          <ul>
            {(data && data.people ? data.people.nodes : []).map(person => (
              <li key={person.id}>
                {person.name} ({person.ranking})
              </li>
            ))}
          </ul>
        )}
      </Subscription>
    </div>
  );
}

export default App;
