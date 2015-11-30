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
	getTournament,
	upsertGolfer
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
				resolve: (obj, {golferId}) => getGolfer(golferId),
				args: {
					golferId: {
						type: GraphQLInt
					}
				}
			},
			tournament: {
				type: TournamentType,
				resolve: (obj, {tournamentId}) => getTournament(tournamentId),
				args: {
					tournamentId: {
						type: GraphQLInt
					}
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: {
			upsertGolfer: {
				type: GolferType,
				args: {
					playerId: {
						description: 'The id of the golfer',
						type: GraphQLInt
					},
					firstName: {
						description: 'The first name of the golfer',
						type: new GraphQLNonNull(GraphQLString)
					},
					lastName: {
						description: 'The last name of the golfer',
						type: new GraphQLNonNull(GraphQLString)
					},
					preferredManufacturer: {
						type: new GraphQLNonNull(GraphQLString)
					},
					lastWin: {
						type: GraphQLString
					},
					careerPrizeMoney: {
						type: new GraphQLNonNull(GraphQLInt)
					},
					careerWins: {
						type: new GraphQLNonNull(GraphQLInt)
					},
					turnedProfessional: {
						type: GraphQLInt
					},
					hometown: {
						type: new GraphQLNonNull(GraphQLString)
					},
					worldRanking: {
						type: GraphQLInt
					}
				},
				resolve: (obj, {playerId, firstName, lastName, preferredManufacturer, 
					lastWin, careerPrizeMoney, careerWins, turnedProfessional, hometown, worldRanking}) => {
					return upsertGolfer(playerId, firstName, lastName, preferredManufacturer, 
					lastWin, careerPrizeMoney, careerWins, turnedProfessional, hometown, worldRanking);
				}
			}
		}
	})
});

export default schema;