const Dev = require('../models/Dev');
const { io, connectedUsers } = require('../websocket');

module.exports = {
	async store(req, res) {
		const { user } = req.headers;
		const { devId } = req.params;

		console.log(io(), connectedUsers());

		const loggedDev = await Dev.findById(user);
		const targetDev = await Dev.findById(devId);

		if (!targetDev) {
			return res.status(400).json({ devTargetExists: false });
		}

		if (targetDev.likes.includes(loggedDev._id)) {
			const loggedSocket = connectedUsers()[user];
			const targetSocket = connectedUsers()[devId];

			if (loggedSocket) {
				io().to(loggedSocket).emit('match', targetDev);
			}

			if (targetSocket) {
				io().to(targetSocket).emit('match', loggedDev);
			}
		}

		loggedDev.likes.push(targetDev._id);
		await loggedDev.save();

		return res.json(loggedDev);
	}
};
