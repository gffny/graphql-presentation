Just a quick GraphQL experimentation

Install dependencies

npm install

npm install --save babel

curl -XPOST -H 'Content-Type:application/graphql'  -d '{ golfer(golferId:0) { firstName, lastName }, tournament(tournamentId:0){ name } }' http://localhost:3000/graphql
