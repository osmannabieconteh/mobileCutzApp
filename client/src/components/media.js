import React, { Component } from 'react';
import fadesOne from './images/fades1.jpg';
import fadesTwo from './images/fades2.jpg';
import fadesThree from './images/fades3.jpg';
import linesOne from './images/lines1.jpg';
import linesTwo from './images/lines2.jpg';
import linesThree from './images/lines3.jpg';
import linesFour from './images/lines4.jpg';
import linesFive from './images/lines5.jpg';

import Navbar from './Navbar';
export class media extends Component {
	render() {
		return (
			<div className="media">
				<Navbar />
				<li className="media">
					<img src={fadesOne} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h5 className="mt-0 mb-1">Quick Pick</h5>
					</div>
				</li>

				<li className="media">
					<img src={fadesTwo} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h5 className="mt-0 mb-1">Quick Pick</h5>
					</div>
				</li>
				<li className="media">
					<img src={fadesThree} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h5 className="mt-0 mb-1">Quick Pick</h5>
					</div>
				</li>
				<div>
					<li className="media">
						<img src={linesOne} alt="CoolImage" height="180" width="180" />
						<div className="media-body">
							<h5 className="mt-0 mb-1">Quick Pick</h5>
						</div>
					</li>
					<li className="media">
						<img src={linesTwo} alt="CoolImage" height="180" width="180" />
						<div className="media-body">
							<h5 className="mt-0 mb-1">Quick Pick</h5>
						</div>
					</li>
					<li className="media">
						<img src={linesThree} alt="CoolImage" height="180" width="180" />
						<div className="media-body">
							<h5 className="mt-0 mb-1">Quick Pick</h5>
						</div>
					</li>
					<li className="media">
						<img src={linesFour} alt="CoolImage" height="180" width="180" />
						<div className="media-body">
							<h5 className="mt-0 mb-1">Quick Pick</h5>
						</div>
					</li>
					<li className="media">
						<img src={linesFive} alt="CoolImage" height="180" width="180" />
						<div className="media-body">
							<h5 className="mt-0 mb-1">Quick Pick</h5>
						</div>
					</li>
				</div>
			</div>
		);
	}
}

export default media;
