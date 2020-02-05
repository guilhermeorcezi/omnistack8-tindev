const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
	'mongodb+srv://guilhermeorcezi:guilhermeorcezi@guilherme-port-gioju.mongodb.net/tindev?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
