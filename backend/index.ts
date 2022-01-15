import { config } from 'dotenv';
config();

import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";

import typeDefs from './src/types.graphql';
import driver from './src/neo4jDriver'

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neoSchema.schema,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
