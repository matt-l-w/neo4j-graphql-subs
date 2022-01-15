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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// @ts-ignore
const events_1 = require("events");
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const graphql_1 = require("@neo4j/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const ws_2 = require("graphql-ws/lib/use/ws");
const types_graphql_1 = __importDefault(require("./src/types.graphql"));
const neo4jDriver_1 = __importDefault(require("./src/neo4jDriver"));
const operationEventEmitter_1 = __importDefault(require("./src/operationEventEmitter"));
const port = process.env.PORT || 4000;
const eventEmitter = new events_1.EventEmitter();
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const neoSchema = new graphql_1.Neo4jGraphQL({ typeDefs: types_graphql_1.default, driver: neo4jDriver_1.default });
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema: neoSchema.schema,
            plugins: [
                (0, operationEventEmitter_1.default)(eventEmitter, 'CreateMessage', 'CreateMessage'),
            ],
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app });
        yield new Promise(resolve => {
            const server = app.listen(port, () => {
                const wsServer = new ws_1.WebSocketServer({
                    server,
                    path: '/graphql',
                });
                (0, ws_2.useServer)({
                    schema: neoSchema.schema,
                    roots: {
                        subscription: {
                            messages: function () {
                                return __asyncGenerator(this, arguments, function* () {
                                    var e_1, _a;
                                    try {
                                        for (var _b = __asyncValues((0, events_1.on)(eventEmitter, 'CreateMessage')), _c; _c = yield __await(_b.next()), !_c.done;) {
                                            const event = _c.value;
                                            const [e] = event;
                                            yield yield __await(e.createMessages);
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) yield __await(_a.call(_b));
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                });
                            }
                        }
                    },
                    onNext: (ctx, msg, args, result) => {
                        console.dir(result);
                    },
                }, wsServer);
            });
            resolve(undefined);
        });
        console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
        return { server: apolloServer, app };
    });
}
startApolloServer();
