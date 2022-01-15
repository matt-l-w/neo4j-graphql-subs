require('dotenv').config()

const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type User {
      id: ID! @id
      messages: [Message!] @relationship(type: "WROTE", direction: OUT)
      createdAt: DateTime! @timestamp(operations: [CREATE])
      updatedAt: DateTime! @timestamp(operations: [UPDATE])
    }

    type Message {
      id: ID! @id
      content: String!
      author: User! @relationship(type: "WROTE", direction: IN)
      parents: [Message!] @relationship(type: "FOLLOWS", direction: OUT, properties: "Follows")
      children: [Message!] @relationship(type: "FOLLOWS", direction: IN, properties: "Follows")
      createdAt: DateTime! @timestamp(operations: [CREATE])
      updatedAt: DateTime! @timestamp(operations: [UPDATE])
    }

    interface Follows @relationshipProperties {
      user: ID! @id
      createdAt: DateTime! @timestamp(operations: [CREATE])
    }
`;

const driver = neo4j.driver(
  "neo4j+s://60fbad4f.databases.neo4j.io",
  neo4j.auth.basic("neo4j", process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neoSchema.schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});