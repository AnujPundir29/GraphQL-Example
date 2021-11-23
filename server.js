const express = require("express");
const {
    buildSchema
} = require("graphql");
const {
    graphqlHTTP
} = require("express-graphql");
const {
    makeExecutableSchema
} = require("@graphql-tools/schema");

// '!' for mandatory

const schema = makeExecutableSchema({
    typeDefs: [schemaText]
})

// const schema = buildSchema();

const root = {
    products: [{
        id: 'RedShoe',
        description: 'Red Shoe',
        reviews: [{
            comment: 'Nice Shoes',
            rating: 4
        }],
        price: 1300.44
    }],
    orders: [{
        date: '24-11-2021',
        subtotal: 1300.44,
        items: [{
            product: {
                id: 'RedShoe',
                description: 'Red Shoe',
                price: 1300.44
            },
            quantity: 1
        }]
    }]
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Listen GraphQL at 3000....")
});