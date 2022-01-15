import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  "neo4j+s://60fbad4f.databases.neo4j.io",
  neo4j.auth.basic("neo4j", process.env.NEO4J_PASSWORD!)
);

export default driver;
