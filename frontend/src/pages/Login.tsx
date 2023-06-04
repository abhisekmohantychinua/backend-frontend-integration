import React, { useState } from 'react';
import { User } from '../models/User';
import { AxiosConfig } from '../config/AxiosConfig';
import { useNavigate } from 'react-router-dom';

interface Props {
	setToken: React.Dispatch<React.SetStateAction<string>>;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = (prop: Props) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const data: User = {
			username: name,
			password: password,
		};
		const token = await new AxiosConfig().loginUser(data);
		if (typeof token === 'string') {
			prop.setToken(`Bearer ${token}`);
			prop.setIsLoggedIn(true);
			navigate('/login');
		} else {
			console.log(token);

			navigate('/register');
		}
	};
	return (
		<>
			<form
				action=''
				onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='usename'>Username:</label>
				<input
					type='text'
					name='username'
					id='username'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					name='password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>submit</button>
				<br />
				<a href='/register'>not a user register?</a>
			</form>
		</>
	);
};

export default Login;
