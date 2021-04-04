import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type  User {
        id: Int!
        name: String
    }

    type  Query {
        getUsers: [User]
        getUser(id: Int!): User
    }`