import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const request = (operation, variables) =>
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });

const createRelayEnvironment = () => {
  const environment = new Environment({
    network: Network.create(request),
    store: new Store(new RecordSource()),
  });

  return environment;
};

export default createRelayEnvironment;
