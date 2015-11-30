import express from 'express';
import bodyParser from 'body-parser';
import graphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import schema from './schema';

const app = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

// Expose a GraphQL endpoint
var graphQLServer = express();
graphQLServer.use('/', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: schema,
}));
graphQLServer.listen(PORT, () => console.log(
    'GraphQL Server is now running on http://localhost:${PORT}'
));


// app.post('/graphql', (req, res) => {
// 	console.log('graphql called', JSON.stringify(req.body));
// 	graphql(schema, req.body)
// 		.then(result => res.send(result));
// });

// let server = app.listen(PORT, 
// 	() => console.log('Server running... at localhost:%s', PORT)
// )