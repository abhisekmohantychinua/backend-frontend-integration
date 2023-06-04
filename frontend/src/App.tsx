import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [token, setToken] = useState<string>('');

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						index
						Component={Register}
					/>
					<Route
						path='/register'
						Component={Register}
					/>
					<Route
						path='/login'
						element={
							!isLoggedIn ? (
								<Login
									setIsLoggedIn={setIsLoggedIn}
									setToken={setToken}
								/>
							) : (
								<Dashboard
									token={token}
									setToken={setToken}
									setIsLoggedIn={setIsLoggedIn}
								/>
							)
						}
					/>

					<Route
						path='*'
						element={<ErrorPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
