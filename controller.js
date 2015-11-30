var playerArray = new Array();
playerArray[0] = {
	playerId: 0,
	firstName: 'Rory',
	lastName: 'McIlroy',
	preferredManufacturer: 'Nike',
	lastWin: 'Dubai Open',
	careerPrizeMoney: 15000000,
	careerWins: 26,
	turnedProfessional: 2007,
	hometown: 'Hollywood, County Down, Ireland',
	worldRanking: 3
};

playerArray[1] = {
	playerId: 1,
	firstName: 'John',
	lastName: 'Gaffney',
	preferredManufacturer: 'Adidas, not really but ...',
	lastWin: 'n/a',
	careerPrizeMoney: 0,
	careerWins: 0,
	turnedProfessional: null,
	hometown: 'Mullingar, County Westmeath, Ireland',
	worldRanking: 7300000000 // roughly the population of earth
} 

playerArray[2] = {
	playerId: 2,
	firstName: 'Sergio',
	lastName: 'Garcia',
	preferredManufacturer: 'Adidas',
	lastWin: 'Irish Open',
	careerPrizeMoney: 10000000,
	careerWins: 10,
	turnedProfessional: 2000,
	hometown: 'Somewhere, Spain',
	worldRanking: 8 // roughly the population of earth
}

var tournamentArray = new Array();
tournamentArray[0] = {
	tournamentId: 0,
	name: 'Irish Open',
	prizeMoney: 3000000,
	hasBeenPlay: true,
	winnerId: 2
}

export const getGolferList = () => {
	console.log('\ncalled getGolferList. json of playerArray: '+JSON.stringify(playerArray));
	return Promise.resolve(playerArray);
}

export const getGolfer = (golferId) => {
	console.log('\ncalled getGolfer('+golferId+') json of playerArray: '+JSON.stringify(playerArray[golferId]));
	return Promise.resolve(playerArray[golferId]);
}

export const getTournament = (tournamentId) => {
	console.log('\ncalled getTournament('+tournamentId+') json of tournamentArray: '+JSON.stringify(tournamentArray[tournamentId]));
	return Promise.resolve(tournamentArray[tournamentId]);
}


