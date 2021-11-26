const express = require("express");
const path = require("path");
const {
    buildSchema
} = require("graphql");
const {
    graphqlHTTP
} = require("express-graphql");
const {
    makeExecutableSchema
} = require("@graphql-tools/schema");
const {
    loadFilesSync
} = require("@graphql-tools/load-files");

// '!' for mandatory

const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers*'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
});

// const schema = buildSchema();

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),    
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Listen GraphQL at 3000....")
});