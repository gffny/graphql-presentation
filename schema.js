import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import {
	getGolferList,
	getGolfer
} from './controller'	

import {
	GolferType
} from './schemaType'

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			golferList: {
				type: new GraphQLList(GolferType),
				resolve: () => getGolferList()
			},
			golfer: {
				type: GolferType,
				resolve: (__placeholder, {golferId}) => getGolfer(golferId),
				args: {
					golferId: {
						type: GraphQLInt
					}
				}
			}
		}
	})
});

export default schema;