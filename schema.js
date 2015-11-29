import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import {
	getGolferList
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
			}
		}
	})
});

export default schema;