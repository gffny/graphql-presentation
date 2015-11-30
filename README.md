Just a quick GraphQL experimentation

Install dependencies

npm install

npm install --save babel

curl -XPOST -H 'Content-Type:application/graphql'  -d '{ golferList { firstName, lastName } }' http://localhost:3000/graphql
