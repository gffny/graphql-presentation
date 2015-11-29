var playerArray = new Array();
playerArray[0] = {
	playerId: 0,
	firstName: 'Rory',
	lastName: 'McIlroy',
	'preferredManufacturer': 'Nike',
	'lastWin': 'Dubai Open',
	'careerPrizeMoney': '15000000',
	'careerWins': 26,
	'turnedProfessional': 2007,
	'hometown': 'Hollywood, County Down, Ireland',
	'worldRanking': 3
};
playerArray[1] = {
	playerId: 1,
	firstName: 'John',
	lastName: 'Gaffney',
	'preferredManufacturer': 'Adidas, not really but ...',
	'lastWin': 'n/a',
	'careerPrizeMoney': '00000000',
	'careerWins': 0,
	'turnedProfessional': null,
	'hometown': 'Mullingar, County Westmeath, Ireland',
	'worldRanking': 7300000000 // roughly the population of earth
} 

export const getGolferList = () => {
	console.log(JSON.stringify(playerArray));
	return Promise.resolve(playerArray);
}

export const getGolfer = (golferId) => playerArray.filter(function(golfer) {
	return golfer.playerId === golferId;
})
