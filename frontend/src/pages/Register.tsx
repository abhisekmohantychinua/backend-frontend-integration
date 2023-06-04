import React, { useState } from 'react';
import { User } from '../models/User';
import { AxiosConfig } from '../config/AxiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [about, setAbout] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		const user: User = {
			username: username,
			password: password,
			about: about,
		};
		new AxiosConfig().registerUser(user);
		navigate('/login');
	};
	return (
		<>
			<form
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='usename'>Username:</label>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='enter username'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='enter password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor='about'>About:</label>
				<textarea
					name='about'
					id='about'
					cols={10}
					rows={10}
					placeholder='enter about'
					onChange={(e) => setAbout(e.target.value)}></textarea>
				<button type='submit'>submit</button>
				<br />
				<a href='/login'>already a user login?</a>
			</form>
		</>
	);
};

export default Register;
