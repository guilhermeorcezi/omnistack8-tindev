import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import match from '../../assets/itsamatch.png';
import './main.css';

export default function Login() {
	const [users, setUsers] = useState([]);
	const [matchDev, setMatchDev] = useState(null);
	let userid = localStorage.getItem('id');

	useEffect(() => {
		async function loadUsers() {
			const response = await api.get('/devs', {
				headers: {
					user: userid
				}
			});
			setUsers(response.data);
		}

		loadUsers();
	}, [userid]);

	useEffect(() => {
		const socket = io('http://localhost:3333', {
			query: { user: userid }
		});

		socket.on('match', (dev) => {
			window.scrollTo(0, 0);
			setMatchDev(dev);
		});
	}, [userid]);

	async function handleLike(id) {
		await api.post(`/devs/${id}/likes`, null, {
			headers: {
				user: userid
			}
		});

		setUsers(users.filter((user) => user._id !== id));
	}

	async function handleDislike(id) {
		await api.post(`/devs/${id}/dislikes`, null, {
			headers: {
				user: userid
			}
		});

		setUsers(users.filter((user) => user._id !== id));
	}

	return (
		<div className="main-container">
			<Link to="/">
				<img src={logo} alt="TinDev" />
			</Link>
			{users.length > 0 ? (
				<ul>
					{users.map((user) => (
						<li key={user._id}>
							<img src={user.avatar} alt={user.name} />
							<footer>
								<strong>{user.name}</strong>
								<p>{user.bio}</p>
							</footer>

							<div className="buttons">
								<button type="button" onClick={() => handleLike(user._id)}>
									<img src={like} alt="like" />
								</button>
								<button type="button">
									<img
										src={dislike}
										alt="dislike"
										onClick={() => handleDislike(user._id)}
									/>
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<div className="empty">Acabou :(</div>
			)}

			{matchDev && (
				<div className="match-container">
					<img src={match} alt="It's a match!" />
					<img className="avatar" src={matchDev.avatar} alt={matchDev.name} />
					<strong>{matchDev.name}</strong>
					<p>{matchDev.bio}</p>

					<button type="button" onClick={() => setMatchDev(null)}>
						FECHAR
					</button>
				</div>
			)}
		</div>
	);
}
