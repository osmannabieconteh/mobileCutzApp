import React, { Component } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';
import Booking from '../components/booking';

class booking extends Component {
	state = {
		booking: [],
		date: '',
		time: ''
	};

	componentDidMount() {
		this.loadBooking();
	}

	loadBooking = () => {
		API.getBooking()
			.then((res) => this.setState({ booking: res.data, date: '', time: '' }))
			.catch((err) => console.log(err));
	};

	deleteBooking = (id) => {
		API.deleteBooking(id).then((res) => this.loadBooking()).catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.date && this.state.time) {
			API.saveBooking({
				date: this.state.date,
				time: this.state.time
			})
				.then((res) => this.loadBooking())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>Book Appointment</h1>
						</Jumbotron>
						<form>
							<Input
								value={this.state.date}
								onChange={this.handleInputChange}
								date="date"
								placeholder="date (required)"
							/>
							<Input
								value={this.state.time}
								onChange={this.handleInputChange}
								time="time"
								placeholder="time (required)"
							/>

							<FormBtn disabled={!(this.state.date && this.state.time)} onClick={this.handleFormSubmit}>
								Submit Appointment
							</FormBtn>
						</form>
					</Col>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1> Appointments </h1>
						</Jumbotron>
						{this.state.booking.length ? (
							<List>
								{this.state.booking.map((booking) => (
									<ListItem key={booking._id}>
										<Link to={'/booking/' + booking._id}>
											<strong>
												{booking.date} by {booking.time}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteBooking(booking._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>MobileCutz</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Booking;
