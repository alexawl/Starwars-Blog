import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//include images into your bundle
import arturito from "../../img/arturito1.jpg";

//create your first component
export const Card = props => {
	const link = "/demo/:" + props.id;
	console.log(link);

	return (
		<div className="mt-3">
			<div className="card">
				<img src={arturito} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
				</div>
				<Link to={link}>
					<a className="card-text nav-link">Get info Details</a>
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number
};
