const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = buildSchema(`type Query { hello: String }`);

const root = {
  hello: () => "World"
}

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphisql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');