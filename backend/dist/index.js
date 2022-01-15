"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const graphql_1 = require("@neo4j/graphql");
const apollo_server_1 = require("apollo-server");
const types_graphql_1 = __importDefault(require("./src/types.graphql"));
const neo4jDriver_1 = __importDefault(require("./src/neo4jDriver"));
const neoSchema = new graphql_1.Neo4jGraphQL({ typeDefs: types_graphql_1.default, driver: neo4jDriver_1.default });
const server = new apollo_server_1.ApolloServer({
    schema: neoSchema.schema,
});
server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
