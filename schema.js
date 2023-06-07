//a schema describes how your data will be structured. It defines the types, fields, and relationships between them.
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Airport {
        name: String
        latitude: Float
        longitude: Float
    }

    type Query {
        airports: [Airport]
        airport(name: String!): Airport
    }
`)

module.exports = schema