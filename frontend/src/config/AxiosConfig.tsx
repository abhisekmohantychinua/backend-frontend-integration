import axios, { AxiosError, AxiosResponse } from 'axios';
import { User } from '../models/User';

export class AxiosConfig {
	private readonly PROTOCOL: string = 'http://';
	private readonly PORT: number = 8080;
	private readonly HOST: string = 'localhost:';
	private endPoint: string = '';

	public registerUser = async (user: User): Promise<User | Error> => {
		this.endPoint = '/register';
		try {
			const response: AxiosResponse<User> = await axios.post(
				this.PROTOCOL + this.HOST + this.PORT + this.endPoint,
				user
			);
			const responseUser: User = response.data;
			console.log(
				'from register user : ' + JSON.stringify(responseUser)
			);
			return responseUser;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('axios error ' + error.message);
			} else {
				console.log(error);
			}

			return error as Error;
		}
	};

	public loginUser = async (user: User): Promise<string | Error> => {
		this.endPoint = '/token';

		try {
			const response: AxiosResponse<string> = await axios.post(
				this.PROTOCOL + this.HOST + this.PORT + this.endPoint,
				user
			);
			const responseToken: string = response.data;
			console.log('token from backend ' + responseToken);
			return responseToken;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('axios error ' + error.message);
			} else {
				console.log(error);
			}

			return error as Error;
		}
	};

	public getAbout = async (
		username: string,
		token: string
	): Promise<string | Error> => {
		this.endPoint = '/about/' + username;

		try {
			const response: AxiosResponse<string> = await axios.get(
				this.PROTOCOL + this.HOST + this.PORT + this.endPoint,
				{ headers: { Authorization: token } }
			);
			const about = response.data;
			console.log(about);
			return about;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('axios error' + error.message);
			} else {
				console.log(error);
			}
			return error as Error;
		}
	};

	public getHello = async (token: string): Promise<string | Error> => {
		this.endPoint = '/hello';
		try {
			const response: AxiosResponse<string> = await axios.get(
				this.PROTOCOL + this.HOST + this.PORT + this.endPoint,
				{ headers: { Authorization: token } }
			);
			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('axios error ' + error.message);
			} else {
				console.log(error);
			}
			return error as Error;
		}
	};

	public logoutUser = async (token: string): Promise<Error | number> => {
		this.endPoint = '/logout';
		try {
			const response: AxiosResponse<void> = await axios.post(
				this.PROTOCOL + this.HOST + this.PORT + this.endPoint,
				null,
				{ headers: { Authorization: token } }
			);
			return response.status;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log('axios error ' + error.message);
			} else {
				console.log(error);
			}
			return error as Error;
		}
	};
}
