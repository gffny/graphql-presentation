import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLEnumType,
	GraphQLBoolean
} from 'graphql';

import {
	getGolfer
} from './controller'

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
		},
		preferredManufacturer: {
			type: GraphQLString
		},
		lastWin: {
			type: GraphQLString
		},
		careerPrizeMoney: {
			type: GraphQLInt
		},
		careerWins: {
			type: GraphQLInt
		},
		turnedProfessional: {
			type: GraphQLInt
		},
		hometown: {
			type: GraphQLString
		},
		worldRanking: {
			type: GraphQLInt
		}
	})
})

export const TournamentType = new GraphQLObjectType({
	name: 'Tournament',
	description: 'defines the characterists of a golf tournament in the system',
	fields: () => ({
		tournamentId: {
			type: GraphQLInt,
			descripton: 'an arbitrary id'
		},
		name: {
			type: GraphQLString,
			descripton: 'tournament\'s first name'
		},
		prizeMoney: {
			type: GraphQLInt,
		},
		hasBeenPlay: {
			type: GraphQLBoolean
		},
		winnerId: {
			type: GraphQLInt
		},
		winner: {
			type: GolferType,
			resolve: (tournament) => getGolfer(tournament.winnerId)
		}
	})
})