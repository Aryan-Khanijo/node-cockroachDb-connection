require('dotenv').config();
const pg = require('knex')({
	client: 'cockroachdb',
	connection: process.env.PG_CONNECTION_STRING,
	searchPath: ['knex', 'public'],
});

pg.raw("select 1")
.then(() => console.log('Connected to RoachDb'))
.catch((err) => console.error('Error connecting to RoachDb', err));