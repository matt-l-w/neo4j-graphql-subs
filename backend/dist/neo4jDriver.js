"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const driver = neo4j_driver_1.default.driver("neo4j+s://60fbad4f.databases.neo4j.io", neo4j_driver_1.default.auth.basic("neo4j", process.env.NEO4J_PASSWORD));
exports.default = driver;
