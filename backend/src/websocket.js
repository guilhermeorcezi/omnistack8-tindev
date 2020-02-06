const socketio = require('socket.io');

let io;
const connectedUsers = [];

exports.setupWebsocket = (server) => {
	io = socketio(server);

	io.on('connection', (socket) => {
		const { user } = socket.handshake.query;
		connectedUsers[user] = socket.id;
	});
};

exports.io = () => {
	return io;
};

exports.connectedUsers = () => {
	return connectedUsers;
};
