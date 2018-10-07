/**
 * @flow
 * @relayHash 6dfd7e33f57a75e6007b09317c1a8c17
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {|
  artistID: string,
  market: string,
|};
export type AppQueryResponse = {|
  +artist: ?{|
    +id: string,
    +name: string,
    +image: {|
      +url: string,
      +width: number,
      +height: number,
    |},
    +albums: {|
      +nodes: $ReadOnlyArray<{|
        +id: string,
        +name: string,
        +releaseDate: any,
        +image: {|
          +url: string,
          +width: number,
          +height: number,
        |},
        +tracks: {|
          +nodes: $ReadOnlyArray<{|
            +id: string,
            +name: string,
            +popularity: number,
            +durationMS: number,
            +discNumber: number,
            +trackNumber: number,
          |}>
        |},
      |}>
    |},
    +topTracks: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +durationMS: number,
      +album: {|
        +image: {|
          +url: string,
          +width: number,
          +height: number,
        |}
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
  $market: String!
) {
  artist(id: $artistID) {
    id
    name
    image(size: M) {
      url
      width
      height
    }
    albums(first: 10, market: $market) {
      nodes {
        id
        name
        releaseDate
        image(size: M) {
          url
          width
          height
        }
        tracks(market: $market) {
          nodes {
            id
            name
            popularity
            durationMS
            discNumber
            trackNumber
          }
        }
      }
    }
    topTracks(market: $market) {
      id
      name
      durationMS
      album {
        image(size: S) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "market",
    "type": "String!",
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
v4 = [
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
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": "image(size:\"M\")",
  "args": [
    {
      "kind": "Literal",
      "name": "size",
      "value": "M",
      "type": "ImageSize!"
    }
  ],
  "concreteType": "Image",
  "plural": false,
  "selections": v4
},
v6 = {
  "kind": "Variable",
  "name": "market",
  "variableName": "market",
  "type": "String"
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "durationMS",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "albums",
  "storageKey": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 10,
      "type": "Int"
    },
    v6
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
        v5,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "tracks",
          "storageKey": null,
          "args": [
            v6
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "popularity",
                  "args": null,
                  "storageKey": null
                },
                v7,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "discNumber",
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
v9 = [
  {
    "kind": "Variable",
    "name": "market",
    "variableName": "market",
    "type": "String!"
  }
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": "image(size:\"S\")",
  "args": [
    {
      "kind": "Literal",
      "name": "size",
      "value": "S",
      "type": "ImageSize!"
    }
  ],
  "concreteType": "Image",
  "plural": false,
  "selections": v4
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery(\n  $artistID: ID!\n  $market: String!\n) {\n  artist(id: $artistID) {\n    id\n    name\n    image(size: M) {\n      url\n      width\n      height\n    }\n    albums(first: 10, market: $market) {\n      nodes {\n        id\n        name\n        releaseDate\n        image(size: M) {\n          url\n          width\n          height\n        }\n        tracks(market: $market) {\n          nodes {\n            id\n            name\n            popularity\n            durationMS\n            discNumber\n            trackNumber\n          }\n        }\n      }\n    }\n    topTracks(market: $market) {\n      id\n      name\n      durationMS\n      album {\n        image(size: S) {\n          url\n          width\n          height\n        }\n        id\n      }\n    }\n  }\n}\n",
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
          v5,
          v8,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topTracks",
            "storageKey": null,
            "args": v9,
            "concreteType": "Track",
            "plural": true,
            "selections": [
              v2,
              v3,
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "album",
                "storageKey": null,
                "args": null,
                "concreteType": "Album",
                "plural": false,
                "selections": [
                  v10
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
          v5,
          v8,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topTracks",
            "storageKey": null,
            "args": v9,
            "concreteType": "Track",
            "plural": true,
            "selections": [
              v2,
              v3,
              v7,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "album",
                "storageKey": null,
                "args": null,
                "concreteType": "Album",
                "plural": false,
                "selections": [
                  v10,
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
(node/*: any*/).hash = 'c210099b94deefbf7e0cd4c7baf6b1e9';
module.exports = node;
