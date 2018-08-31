/**
 * @flow
 * @relayHash 457ab029a06ea2c23898c65d3d29f30c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {|
  artistID: string
|};
export type AppQueryResponse = {|
  +artist: ?{|
    +id: string,
    +name: string,
    +images: $ReadOnlyArray<{|
      +url: string,
      +width: number,
      +height: number,
    |}>,
    +albums: {|
      +nodes: $ReadOnlyArray<{|
        +id: string,
        +name: string,
        +releaseDate: any,
        +images: $ReadOnlyArray<{|
          +url: string,
          +width: number,
          +height: number,
        |}>,
        +tracks: {|
          +nodes: $ReadOnlyArray<{|
            +id: string,
            +name: string,
            +popularity: number,
            +durationMS: number,
            +trackNumber: number,
          |}>
        |},
      |}>
    |},
    +topTracks: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +popularity: number,
      +album: {|
        +images: $ReadOnlyArray<{|
          +url: string,
          +width: number,
          +height: number,
        |}>
      |},
    |}>,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $artistID: ID!
) {
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
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "images",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "width",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "height",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "popularity",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "albums",
  "storageKey": "albums(first:10)",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 10,
      "type": "Int"
    }
  ],
  "concreteType": "AlbumConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nodes",
      "storageKey": null,
      "args": null,
      "concreteType": "Album",
      "plural": true,
      "selections": [
        v2,
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "releaseDate",
          "args": null,
          "storageKey": null
        },
        v4,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "tracks",
          "storageKey": "tracks(first:25)",
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 25,
              "type": "Int"
            }
          ],
          "concreteType": "TrackConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "nodes",
              "storageKey": null,
              "args": null,
              "concreteType": "Track",
              "plural": true,
              "selections": [
                v2,
                v3,
                v5,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "durationMS",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "trackNumber",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
v7 = [
  {
    "kind": "Literal",
    "name": "market",
    "value": "FR",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    id\n    name\n    images {\n      url\n      width\n      height\n    }\n    albums(first: 10) {\n      nodes {\n        id\n        name\n        releaseDate\n        images {\n          url\n          width\n          height\n        }\n        tracks(first: 25) {\n          nodes {\n            id\n            name\n            popularity\n            durationMS\n            trackNumber\n          }\n        }\n      }\n    }\n    topTracks(market: \"FR\") {\n      id\n      name\n      popularity\n      album {\n        images {\n          url\n          width\n          height\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v6,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topTracks",
            "storageKey": "topTracks(market:\"FR\")",
            "args": v7,
            "concreteType": "Track",
            "plural": true,
            "selections": [
              v2,
              v3,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "album",
                "storageKey": null,
                "args": null,
                "concreteType": "Album",
                "plural": false,
                "selections": [
                  v4
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v6,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topTracks",
            "storageKey": "topTracks(market:\"FR\")",
            "args": v7,
            "concreteType": "Track",
            "plural": true,
            "selections": [
              v2,
              v3,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "album",
                "storageKey": null,
                "args": null,
                "concreteType": "Album",
                "plural": false,
                "selections": [
                  v4,
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '640b3d415655a9fc068548e6b37d1705';
module.exports = node;
