"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const events_1 = __importDefault(require("events"));
const express_1 = __importDefault(require("express"));
const graphql_1 = require("@neo4j/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const types_graphql_1 = __importDefault(require("./src/types.graphql"));
const neo4jDriver_1 = __importDefault(require("./src/neo4jDriver"));
const operationEventEmitter_1 = __importDefault(require("./src/operationEventEmitter"));
const port = process.env.PORT || 4000;
const eventEmitter = new events_1.default();
eventEmitter.on('GetMessages', (data) => {
    console.dir(data);
});
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const neoSchema = new graphql_1.Neo4jGraphQL({ typeDefs: types_graphql_1.default, driver: neo4jDriver_1.default });
        const server = new apollo_server_express_1.ApolloServer({
            schema: neoSchema.schema,
            plugins: [
                (0, operationEventEmitter_1.default)(eventEmitter, 'GetMessages', 'GetMessages'),
            ]
        });
        yield server.start();
        server.applyMiddleware({ app });
        yield new Promise(resolve => app.listen({ port }, () => resolve({})));
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
        return { server, app };
    });
}
startApolloServer();
