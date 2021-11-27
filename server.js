const express = require("express");
const path = require("path");
const {
    buildSchema
} = require("graphql");
// const {
//     graphqlHTTP
// } = require("express-graphql");

const {
    ApolloServer
} = require("apollo-server-express");

const {
    makeExecutableSchema
} = require("@graphql-tools/schema");
const {
    loadFilesSync
} = require("@graphql-tools/load-files");

// '!' for mandatory

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers*'));

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema: schema,
    });

    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql'
    });
    app.listen(3000, () => {
        console.log("Listen GraphQL at 3000....")
    });
}

startApolloServer();