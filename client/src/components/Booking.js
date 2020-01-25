import React, { Component } from 'react';
import firebase from '../firebase';
import Navbar from './Navbar';
import myBackgroundImage from './pictures/PeddleCutz2.jpg';

const styles = {
	backgroundImage: `url(${myBackgroundImage})`,
	height: '100%'
};

export default class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			date: '',
			time: '',
			times: [ '9', '10', '11', '12', '1', '2', '3', '4', '5' ]
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: user
				});
			} else {
				this.setState({
					user: null
				});
				this.props.history.push('/landing');
			}
		});
	}

	book = (e) => {
		e.preventDefault();
		const database = firebase.database();
		database.ref('/bookings').push({
			date: this.state.date,
			time: this.state.time,
			uid: this.state.user.uid
		});

		this.props.history.push('/');
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleTimeChange = (hour) => {
		this.setState({
			time: hour
		});
	};

	render() {
		return (
			<div style={styles}>
				<Navbar user={this.state.user} />
				<h1>Booking's</h1>
				<input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
				<div className="btn-group">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Select Time
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{this.state.times.map((hour, index) => {
							return (
								<a
									key={index}
									className="dropdown-item"
									name="time"
									value={this.state.time}
									onClick={() => this.handleTimeChange(hour)}
								>{`${hour}:00`}</a>
							);
						})}
					</div>
				</div>
				<h1>
					{this.state.date} {this.state.time !== '' ? 'at ' + this.state.time + ':00' : null}
				</h1>
				{<input type="submit" value="submit" onclick="return Landing();" />}
			</div>
		);
	}
}
