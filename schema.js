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
	getGolfer,
	getTournament
} from './controller'	

import {
	GolferType,
	TournamentType
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
			},
			tournament: {
				type: TournamentType,
				resolve: (__placeholder, {tournamentId}) => getTournament(tournamentId),
				args: {
					tournamentId: {
						type: GraphQLInt
					}
				}
			}
		}
	})
});

export default schema;