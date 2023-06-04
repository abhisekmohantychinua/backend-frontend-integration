import React, { useEffect, useState } from 'react';
import { AxiosConfig } from '../config/AxiosConfig';

interface Props {
	token: string;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	setToken: React.Dispatch<React.SetStateAction<string>>;
}
const Dashboard = (prop: Props) => {
	const [about, setAbout] = useState('');
	const [name, setName] = useState('');
	const [hello, setHello] = useState('');

	const getHello = async () => {
		const hello = await new AxiosConfig().getHello(prop.token);
		setHello(hello.toString());
	};
	useEffect(() => {
		getHello();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const getAbout = await new AxiosConfig().getAbout(name, prop.token);
		setAbout(getAbout.toString());
	};
	const handleLogout = async (e: React.MouseEvent) => {
		try {
			const status = await new AxiosConfig().logoutUser(prop.token);
			console.log(status);
			prop.setToken('');
			prop.setIsLoggedIn(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<h1>Dahsboard</h1>
			<h2>{hello}</h2>

			<form
				action=''
				onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					id='username'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type='submit'>Enter</button>
				<textarea
					name='about'
					id='about'
					value={about}
					disabled></textarea>
			</form>

			<button
				type='submit'
				onClick={(e) => handleLogout(e)}>
				Logout
			</button>
		</>
	);
};

export default Dashboard;
