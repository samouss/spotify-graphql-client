import React, { Component } from 'react';
import { graphql } from 'react-relay';
import styled from 'styled-components';
import { Duration } from 'luxon';
import GraphQL from './GraphQL';
import Title from './components/Title';
import './App.css';

// const MELODY_GARDOT = '2P1puQXmG48EVLBrHbum1J';
const JIMI_HENDRIX = '776Uo845nYHJpNaStv1Ds4';
const ARTIST_ID = JIMI_HENDRIX;

const Content = styled.section`
  max-width: 980px;
  margin: 0 auto 75px;
  padding: 0 25px;
`;

const Summary = styled.article`
  margin-bottom: 75px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
`;

const Picture = styled.img`
  width: ${props => (props.small ? 150 : 330)}px;
  height: ${props => (props.small ? 150 : 330)}px;
  border: 5px solid #ffffff;
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

const Section = styled.section``;

const Collection = styled.ul`
  list-style: none;
  padding: 0;
`;

const Disc = styled.li`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DiscSummary = styled.div`
  display: flex;
`;

const DiscInfo = styled.div`
  margin-left: 20px;
`;

const DiscYear = styled.p`
  margin: 0;
  color: #828282;
  font-size: 0.85rem;
`;

const DiscName = styled.h2`
  margin: 5px 0;
`;

const DiscTracks = styled.ol`
  padding: 0;
  list-style: none;
  margin-top: 25px;
`;

const DiscTrack = styled.li`
  display: flex;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #828282;
`;

const DiscTrackNumber = styled.span`
  color: #828282;
  flex: 0.02;
`;

const DiscTrackName = styled.span`
  flex: 1;
  margin-left: 20px;
`;

const DiscTrackDuration = styled.span`
  color: #828282;
`;

const DiscTrackPopularity = styled.span`
  color: #828282;
  margin-left: 20px;
`;

const Time = ({ value, children, format = 'm:ss' }) =>
  children(Duration.fromMillis(value).toFormat(format));

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
              albums(first: 5) {
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
          artistID: ARTIST_ID,
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          return (
            <Content>
              <Summary>
                <Title center>{props.artist.name}</Title>
                <Description>
                  <Picture
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
                        <Time value={track.durationMS}>
                          {value => <span>{value}</span>}
                        </Time>
                      </TopTrack>
                    ))}
                  </TopTracks>
                </Description>
              </Summary>

              <Section>
                {/* @TODO: kind support */}
                <Title small>Albums</Title>
                <Collection>
                  {props.artist.albums.nodes.map(album => (
                    <Disc key={album.id}>
                      <DiscSummary>
                        <Picture
                          src={album.images[1].url}
                          alt={album.name}
                          small
                        />
                        <DiscInfo>
                          {/* @TODO */}
                          <DiscYear>{album.releaseDate.slice(0, 4)}</DiscYear>
                          <DiscName>{album.name}</DiscName>
                        </DiscInfo>
                      </DiscSummary>
                      <DiscTracks>
                        {/* @TODO: disc support */}
                        {album.tracks.nodes.map(track => (
                          <DiscTrack key={track.id}>
                            <DiscTrackNumber>
                              {track.trackNumber}
                            </DiscTrackNumber>
                            <DiscTrackName>{track.name}</DiscTrackName>
                            <DiscTrackDuration>
                              <Time value={track.durationMS}>
                                {value => value}
                              </Time>
                            </DiscTrackDuration>
                            <DiscTrackPopularity>
                              {track.popularity}
                            </DiscTrackPopularity>
                          </DiscTrack>
                        ))}
                      </DiscTracks>
                    </Disc>
                  ))}
                </Collection>
              </Section>
            </Content>
          );
        }}
      />
    );
  }
}

export default App;
