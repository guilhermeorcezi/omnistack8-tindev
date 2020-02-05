import React, { useState, useEffect } from 'react';
import {
	View,
	KeyboardAvoidingView,
	Text,
	TextInput,
	Image,
	StyleSheet,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import logo from '../../../assets/logo.png';
import api from '../../services/api';

export default function Login({ navigation }) {
	const [user, setUser] = useState('');

	useEffect(() => {
		AsyncStorage.getItem('user').then((user) => {
			if (user) navigation.navigate('Main', { user });
		});
	}, []);

	async function handleLogin() {
		const response = await api.post('/register', { user });

		const { _id } = response.data;
		
		await AsyncStorage.setItem('user', _id);
		navigation.navigate('Main', { user: _id });
	}

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<Image source={logo} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Digite o usuário do Github"
				placeholderTextColor="#999"
				style={styles.input}
				value={user}
				onChangeText={setUser}
			></TextInput>
			<TouchableOpacity onPress={handleLogin} style={styles.button}>
				<Text style={styles.buttonText}>Enviar</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30
	},

	input: {
		height: 45,
		alignSelf: 'stretch',
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 4,
		marginTop: 20,
		paddingHorizontal: 15
	},

	button: {
		height: 46,
		alignSelf: 'stretch',
		backgroundColor: '#DF4723',
		borderRadius: 4,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	}
});
