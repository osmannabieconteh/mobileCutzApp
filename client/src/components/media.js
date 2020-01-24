import React, { Component } from 'react';
import fadesOne from './images/fades1.jpg';
export class media extends Component {
	render() {
		return (
			<div className="media">
				<li className="media">
					<img src={fadesOne} alt="CoolImage" height="180" width="180" />
					<div className="media-body">
						<h5 className="mt-0 mb-1">Quick Pick</h5>
					</div>
				</li>
			</div>
		);
	}
}

export default media;
