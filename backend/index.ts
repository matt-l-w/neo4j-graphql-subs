import { config } from 'dotenv';
config();

// @ts-ignore
import { on, EventEmitter } from 'events';
import express from 'express';
import { WebSocketServer } from 'ws';
import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server-express";
import { useServer } from 'graphql-ws/lib/use/ws';

import typeDefs from './src/types.graphql';
import driver from './src/neo4jDriver'
import operationEventPlugin from './src/operationEventEmitter';

const port = process.env.PORT || 4000

const eventEmitter = new EventEmitter()

async function startApolloServer() {
  const app = express();

  const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
  const apolloServer = new ApolloServer({
    schema: neoSchema.schema,
    plugins: [
      operationEventPlugin(eventEmitter, 'CreateMessage', 'CreateMessage'),
    ],
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await new Promise(resolve => {
    const server = app.listen(port, () => {
      const wsServer = new WebSocketServer({
        server,
        path: '/graphql',
      });

      useServer({
        schema: neoSchema.schema,
        roots: {
          subscription: {
            messages: async function*() {
              for await (const event of on(eventEmitter, 'CreateMessage')) {
                const [e] = event;
                yield e.createMessages
              }
            }
          }
        },
        context: { driver },
        onNext: (ctx, msg, args, result) => {
          console.dir(result);
        },
      }, wsServer)
    })
    resolve(undefined);
  })
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
  return { server: apolloServer, app };
}

startApolloServer();
