import React, { Component } from 'react';
import Navbar from './Navbar';
import firebase from '../firebase';
import Booking from './Booking';
import myBackgroundImage from './pictures/peddlecutz5.png';

const styles = {
	backgroundImage: `url(${myBackgroundImage})`,
	height: '100%'
};

export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			appointments: []
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: user
				});

				this.listAppointments();
			} else {
				this.setState({
					user: null
				});
				this.props.history.push('/login');
			}
		});
	}

	listAppointments = () => {
		const database = firebase.database();
		let data = [];
		database
			.ref('/bookings')
			.orderByChild('uid')
			.equalTo(this.state.user.uid)
			.on('child_added', function(snapshot) {
				data.push(snapshot.val());
			});

		this.setState({ appointments: data });
		console.log(this.state.appointments);
	};

	renderAppointments = () => {
		console.log(this.state.appointments);
		for (var i = 0; i < this.state.appointments.length; i++) {
			return <div key={i}>{this.state.appointments[i].time}</div>;
		}
	};

	render() {
		return (
			<div style={styles}>
				<Navbar user={this.state.user} />
				<h1>My appointments</h1>
				<div>
					{this.state.appointments.map((appointment) => {
						return (
							<div key={appointment._id}>
								<div>{appointment.date}</div>
								<div>{appointment.time}</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
