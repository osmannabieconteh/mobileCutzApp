import React, { Component } from 'react';
import firebase from '../../firebase';
import Navbar from '../../components/Navbar';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			zipcode: '',
			user: null
		};
	}

	registerUser = (e) => {
		e.preventDefault();
		const name = this.state.name;
		const email = this.state.email;
		const password = this.state.password;
		const zipcode = this.state.zipcode;
		const auth = firebase.auth();
		const database = firebase.database();
		auth
			.createUserWithEmailzipCodeAndPassword(email, password)
			.then((res) => {
				console.log(res);
				database.ref('/users').push({
					uid: res.user.uid,
					name: name
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});
	};

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

	render() {
		return (
			<div>
				<Navbar user={this.state.user} />
				<div className="col-md-6 offset-md-3">
					<h1>Register</h1>
					<form onSubmit={this.registerUser}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								onChange={this.handleChange}
								className="form-control"
								type="text"
								name="name"
								value={this.state.name}
							/>
						</div>
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
						<div className="form-group">
							<label htmlFor="zipcode">ZipCode</label>
							<input
								onChange={this.handleChange}
								type="zipcode"
								className="form-control"
								name="zipcode"
								value={this.state.zipcode}
							/>
						</div>
						<input type="submit" value="Login" className="btn btn-primary btn-lg btn-block" />
					</form>
				</div>
			</div>
		);
	}
}
