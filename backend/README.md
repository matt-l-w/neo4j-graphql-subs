# Backend

Creates a graphql API for the neo4j database.

## Running

```sh
npm run start:dev
```

## Gen Typescript Types

```sh
npm run gen:types
```

# To Do

Understand why the response is producing GraphQL errors.

## Errors

Are being generated from the backend for sure - they can be seen in the repsonse sent back.

Line 109 [here](node_modules/@neo4j/graphql/dist/classes/Neo4jGraphQL.js) is fucking things up. It's attempting to assign the driver to an undefined context. See [relevant line in upstream](https://github.com/neo4j/graphql/blob/0e3d31c9a051764201ea44cbf4c4d449b13fbe72/packages/graphql/src/schema/resolvers/wrapper.ts#L48).

Why isn't this set for my response with the yielded data?

Perhaps I'm forced to use [graphql-subscriptions](https://github.com/apollographql/graphql-subscriptions)?
