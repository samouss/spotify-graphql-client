import React, { Component } from 'react';
import { graphql } from 'react-relay';
import styled from 'styled-components';
import GraphQL from './GraphQL';
import Title from './components/Title';
import './App.css';

const Summary = styled.article`
  text-align: center;
  margin-top: 25px;
`;

const Portrait = styled.img`
  border: 5px solid #ffffff;
`;

class App extends Component {
  render() {
    return (
      <GraphQL
        query={graphql`
          query AppQuery($artistID: ID!) {
            artist(id: $artistID) {
              id
              name
              images {
                url
                width
                height
              }
              albums(first: 10) {
                nodes {
                  id
                  name
                  releaseDate
                  images {
                    url
                    width
                    height
                  }
                  tracks(first: 25) {
                    nodes {
                      id
                      name
                      popularity
                      durationMS
                      trackNumber
                    }
                  }
                }
              }
              topTracks(market: "FR") {
                id
                name
                popularity
                album {
                  images {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        `}
        variables={{
          artistID: '776Uo845nYHJpNaStv1Ds4',
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return (
            <section>
              <Summary>
                <Title>{props.artist.name}</Title>
                <Portrait
                  src={props.artist.images[1].url}
                  alt={props.artist.name}
                />
              </Summary>

              <Title small>Popular</Title>
              <ul>
                {props.artist.topTracks.map(track => (
                  <li key={track.id}>
                    <img src={track.album.images[2].url} alt={track.name} />
                    {track.name}
                  </li>
                ))}
              </ul>

              <Title small>Albums</Title>
              <ul>
                {props.artist.albums.nodes.map(album => (
                  <li key={album.id}>
                    <img src={album.images[2].url} alt={album.name} />
                    {album.name}
                    <ul>
                      {album.tracks.nodes.map(track => (
                        <li key={track.id}>{track.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          );
        }}
      />
    );
  }
}

export default App;
