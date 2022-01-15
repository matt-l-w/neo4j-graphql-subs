import { gql } from "apollo-server";

export const typeDefs = gql`
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

    type Subscription {
      messages: [Message!]
    }
`;

export default typeDefs;