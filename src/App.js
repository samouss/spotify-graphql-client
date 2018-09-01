import React, { Component } from 'react';
import { graphql } from 'react-relay';
import styled from 'styled-components';
import { Duration } from 'luxon';
import GraphQL from './GraphQL';
import Title from './components/Title';
import './App.css';

const Summary = styled.article`
  margin-bottom: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
`;

const Portrait = styled.img`
  border: 5px solid #ffffff;
`;

const Collection = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const TopTracks = styled.ol`
  list-style: none;
  flex: 1;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
`;

const TopTrack = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TopTrackIndex = styled.span`
  margin-left: 10px;
`;

const TopTrackName = styled.span`
  margin-left: 20px;
  flex: 1;
`;

const TopTrackPicture = styled.img`
  width: 50px;
  height: auto;
`;

const Time = ({ milliseconds, children, format = 'm:ss' }) =>
  children(Duration.fromMillis(milliseconds).toFormat(format));

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
                  tracks {
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
                durationMS
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
                <Title center>{props.artist.name}</Title>
                <Description>
                  <Portrait
                    src={props.artist.images[1].url}
                    alt={props.artist.name}
                  />
                  <TopTracks>
                    {props.artist.topTracks.slice(0, 5).map((track, index) => (
                      <TopTrack key={track.id}>
                        <TopTrackPicture
                          src={track.album.images[2].url}
                          alt={track.name}
                        />
                        <TopTrackIndex>{index + 1}</TopTrackIndex>
                        <TopTrackName>{track.name}</TopTrackName>
                        <Time milliseconds={track.durationMS}>
                          {value => <span>{value}</span>}
                        </Time>
                      </TopTrack>
                    ))}
                  </TopTracks>
                </Description>
              </Summary>

              <Collection>
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
              </Collection>
            </section>
          );
        }}
      />
    );
  }
}

export default App;
