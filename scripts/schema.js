const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

fetch('http://localhost:3000', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: introspectionQuery,
  }),
})
  .then(res => res.json())
  .then(res => {
    console.log(res);

    fs.writeFileSync(
      path.join(__dirname, '..', 'schema.graphql'),
      printSchema(buildClientSchema(res.data))
    );
  });
