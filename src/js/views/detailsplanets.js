import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import { Consumer } from "../store/appContext";

//import your own components
import "../../styles/index.scss";
import { Footer } from "../component/footer";

//include images into your bundle
import arturito from "../../img/arturito1.jpg";

export class Details1 extends React.Component {
	constructor() {
		super();
		this.state = {
			item: []
		};
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/${this.props.match.params.type}/${this.props.match.params.id}`)
			.then(res => res.json())
			.then(data => this.setState({ item: data }));
	}

	render() {
		console.log(this.props.match.params);
		console.log(this.state.item);
		return (
			<div className="tittledetail">
				<div>
					<h2 className="tittlebrowser">Databank //</h2>
				</div>
				<div className="conteinerdetail row">
					<div className="imgdetail">
						<img src={arturito} className="card-img-top" />
					</div>
					<div className="descriptiondetail">
						<div className="tittledetail2">
							<h2>{this.state.item.name}</h2>
						</div>
						<div className="contentdetail">
							<p>This is a test of planets text.</p>
						</div>
					</div>
				</div>
				<div className="bottomdetail row">
					<div className="bottomdetail1">
						<p>Cimate:</p>
						<p>{this.state.item.climate}</p>
					</div>
					<div className="bottomdetail1">
						<p>Diameter:</p>
						<p>{this.state.item.diameter}</p>
					</div>
					<div className="bottomdetail1">
						<p>Orbital Period:</p>
						<p>{this.state.item.orbital_period}</p>
					</div>
					<div className="bottomdetail2">
						<p>Population</p>
						<p>{this.state.item.population}</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Details1.propTypes = {
	match: PropTypes.object
};
