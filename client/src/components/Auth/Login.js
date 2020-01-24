import React, { Component } from 'react';
import firebase from '../../firebase';
import Navbar from '../Navbar';

export default class Login extends Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
			user: null
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: user
				});
				this.props.history.push('/');
			} else {
				this.setState({
					user: null
				});
			}
		});
	}

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});
	};

	loginUser = (e) => {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const auth = firebase.auth();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				console.log(res);
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<Navbar user={this.state.user} />
				<div className="col-md-6 offset-md-3">
					<h1>Login</h1>
					<form onSubmit={this.loginUser}>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								onChange={this.handleChange}
								className="form-control"
								type="text"
								name="email"
								value={this.state.email}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								onChange={this.handleChange}
								type="password"
								className="form-control"
								name="password"
								value={this.state.password}
							/>
						</div>
						<input type="submit" value="Login" className="btn btn-primary btn-lg btn-block" />
					</form>
				</div>
			</div>
		);
	}
}
