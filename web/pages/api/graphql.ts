//
// example source https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/
//

import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
};

export default apolloServer.createHandler({ path: "/api/graphql" });