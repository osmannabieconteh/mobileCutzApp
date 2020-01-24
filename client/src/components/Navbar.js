import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

export default class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		const auth = firebase.auth();
		auth.signOut();
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					MobileCutz
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							{this.props.user ? (
								<Link className="nav-link" to="/">
									Home
								</Link>
							) : null}
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/register" className="nav-link">
								Register
							</Link>
						</li>
						<li className="nav-item">
							{this.props.user ? (
								<Link to="/booking" className="nav-link">
									Book Me
								</Link>
							) : null}
						</li>
						<form className="form-inline my-2 my-lg-0">
							{this.props.user ? (
								<button
									className="btn btn-outline-danger my-2 my-sm-0"
									type="submit"
									onClick={this.logout}
								>
									Logout
								</button>
							) : null}
						</form>
						<div className="media">
							{this.props.user ? (
								<Link to="/media" className="nav-link">
									Media
								</Link>
							) : null}
						</div>
					</ul>
				</div>
			</nav>
		);
	}
}
