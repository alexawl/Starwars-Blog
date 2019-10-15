import React from "react";
import { Consumer } from "../store/appContext.js";
import PropTypes from "prop-types";

//import { Consumer } from "../store/appContext";

//import your own components
import "../../styles/index.scss";
import { Footer } from "../component/footer";

//include images into your bundle
import arturito from "../../img/arturito1.jpg";

export class Details extends React.Component {
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
							<p>This is a test of character text.</p>
							<Consumer>
								{({ actions }) => {
									return (
										<button
											type="button"
											className="btn btn-primary btn-sm"
											onClick={() => actions.addToFavorites(this.state.item)}>
											Add to Favorites
										</button>
									);
								}}
							</Consumer>
						</div>
					</div>
				</div>
				<div className="bottomdetail row">
					<div className="bottomdetail1">
						<p>Gender:</p>
						<p>{this.state.item.gender}</p>
					</div>
					<div className="bottomdetail1">
						<p>Hair Color:</p>
						<p>{this.state.item.hair_color}</p>
					</div>
					<div className="bottomdetail1">
						<p>Height:</p>
						<p>{this.state.item.height}</p>
					</div>
					<div className="bottomdetail2">
						<p>Eye Color:</p>
						<p>{this.state.item.eye_color}</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};
