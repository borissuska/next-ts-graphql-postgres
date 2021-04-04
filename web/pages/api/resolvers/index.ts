import { UserInputError } from 'apollo-server-errors';
import { sampleUserData } from '../../../utils/sample-data'

export const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                if (!Array.isArray(sampleUserData)) {
                    throw new Error('Cannot find user data')
                }

                return sampleUserData;
            } catch (error) {
                throw error;
            }
        },
        getUser: async (_: any, args: { id: number; }) => {
            try {
                if (!Array.isArray(sampleUserData)) {
                    throw new Error('Cannot find user data')
                }

                const user = sampleUserData.find(u => u.id == args.id);
                if (!user) {
                    throw new UserInputError("Invalid user ID");
                }

                return user;
            } catch (error) {
                throw error;
            }
        }
    }
};