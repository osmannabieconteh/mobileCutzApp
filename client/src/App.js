import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Booking from './components/Booking';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import media from './components/media';

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Landing} />
				<Route exact path="/booking" component={Booking} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/media" component={media} />
			</div>
		</Router>
	);
}

export default App;
