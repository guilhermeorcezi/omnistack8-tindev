const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
