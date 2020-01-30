import React, { Component } from 'react';
import fadesOne from './images/fades1.jpg';
import fadesTwo from './images/fades2.jpg';
import fadesThree from './images/fades3.jpg';

import Navbar from './Navbar';
export class media extends Component {
	render() {
		return (
			<div className="media-invisible">
				<Navbar />
				<li className="media">
					<img src={fadesOne} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h1 className="media" />
					</div>
				</li>

				<li className="media">
					<img src={fadesTwo} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h1 className="media" />
					</div>
				</li>
				<li className="media">
					<img src={fadesThree} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h1 className="media" />
					</div>
				</li>
			</div>
		);
	}
}

export default media;
