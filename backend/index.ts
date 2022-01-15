import { config } from 'dotenv';
config();

import EventEmitter from 'events';
import express from 'express';
import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server-express";

import typeDefs from './src/types.graphql';
import driver from './src/neo4jDriver'
import operationEventPlugin, { EVENT_NAME_PREFIX } from './src/operationEventEmitter';

const port = process.env.PORT || 4000

const eventEmitter = new EventEmitter()
eventEmitter.on('GetMessages', (data) => {
  console.dir(data)
})

async function startApolloServer() {
  const app = express();

  const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
  const server = new ApolloServer({
    schema: neoSchema.schema,
    plugins: [
      operationEventPlugin(eventEmitter, 'GetMessages', 'GetMessages'),
    ]
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port }, () => resolve({})));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
