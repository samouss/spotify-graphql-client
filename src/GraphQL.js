import React from 'react';
import { QueryRenderer } from 'react-relay';
import createRelayEnvironment from './createRelayEnvironment';

const environment = createRelayEnvironment();

const GraphQL = props => <QueryRenderer environment={environment} {...props} />;

export default GraphQL;
