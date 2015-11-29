import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLEnumType
} from 'graphql';

export const GolferType = new GraphQLObjectType({
	name: 'Golfer',
	description: 'defines the characterists of a golf player in the system',
	fields: () => ({
		playerId: {
			type: GraphQLInt,
			descripton: 'an arbitrary id'
		},
		firstName: {
			type: GraphQLString,
			descripton: 'golfer\'s first name'
		},
		lastName: {
			type: GraphQLString,
			descripton: 'golfer\'s last name'
		}
	})
})