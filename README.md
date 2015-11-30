Just a quick GraphQL experimentation

Install dependencies

npm install

npm install --save babel

curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation M { upsertGolfer( firstName: "Tiger", lastName: "Woods", preferredManufacturer: "Nike", hometown: "Cypress, CA", careerPrizeMoney: 250000000, careerWins: 30, turnedProfessional: 1999, worldRanking: 123 ) { playerId, firstName, lastName } }' http://localhost:3000/graphql

