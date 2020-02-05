import React, { useState } from 'react';

import logo from '../../assets/logo@3x.png';
import './login.css';
import api from '../../services/api';

export default function Login({ history }) {
	const [user, setUser] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		const response = await api.post('/register', {
			user
		});

		const id = response.data._id;

		localStorage.setItem('id', id);
		history.push('/dev');
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="TinDev" />
				<input
					placeholder="Digite seu usuário"
					name="user"
					id="user"
					required
					value={user}
					onChange={(event) => setUser(event.target.value)}
				/>

				<button type="submit">Cadastrar</button>
			</form>
		</div>
	);
}
