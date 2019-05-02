import React from "react";
import gql from "graphql-tag";
import { Subscription } from "react-apollo";
import FlipMove from "react-flip-move";
import "./index.css"

const Rankings = gql`
  subscription Rankings {
    people(orderBy: RANKING_DESC) {
      nodes {
        id
        name
        ranking
        avatarUrl
      }
    }
  }
`;

const nameStyle = {
  fontSize: '1.3em',
  fontWeight: 'bold'
};
const scoreStyle = {
};

function App() {
  return (
    <div style={{
      padding: 10,
      maxWidth: 680,
      margin: '50px auto',
      backgroundColor: '#0000ff',
    }}>
      <Subscription subscription={Rankings}>
        {({ data, loading }) => (
          <FlipMove style={{ display: 'flex', flexWrap: 'wrap', }}>
            {(data && data.people ? data.people.nodes : []).map(person => (
              <div key={person.id} style={{
                width: 150,
                height: 150,
                backgroundImage: `url(${person.avatarUrl})`,
                margin: 10
              }}>
              <span style={nameStyle}>{person.name}</span><br /><span style={scoreStyle}>{person.ranking}</span>
              </div>
            ))}
          </FlipMove>
        )}
      </Subscription>
    </div>
  );
}

export default App;
