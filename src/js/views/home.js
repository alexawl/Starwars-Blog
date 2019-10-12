import React from "react";
import PropTypes from "prop-types";

//import your own components
import { Card } from "../component/card";
import { Footer } from "../component/footer";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			planets: [],
			temp: ""
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/?format=json")
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					console.log("Bad response");
				}
			})
			.then(data => {
				this.setState({ characters: data.results });
			})
			.catch(error => console.log(error));

		fetch("https://swapi.co/api/planets/?format=json")
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					console.log("Bad response");
				}
			})
			.then(data => {
				this.setState({ planets: data.results });
				console.log(data.results);
			})
			.catch(error => console.log(error));
	}

	render() {
		const characters = this.state.characters;
		const planets = this.state.planets;
		console.log(planets);

		return (
			<div className="tittlebod">
				<div>
					<h2 className="tittlebrowser">Browse Databank //</h2>
				</div>
				<div className="tittlegrid1">
					<h3 className="h1grid1">Characters //</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							{characters.map((actor, ind) => {
								let x = actor.url;
								let x1 = x.substr(28);
								let x2 = parseInt(x1);
								let y = x.substr(21, 6);
								return <Card key={ind} name={actor.name} id={x2} type={y} />;
							})}
						</div>
					</div>
				</div>
				<div className="tittlegrid2">
					<h3 className="h1grid2">Planets //</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							{planets.map((worlds, ind) => {
								let x = worlds.url;
								let x1 = x.substr(29);
								let x2 = parseInt(x1);
								let y = x.substr(21, 7);
								return <Card key={ind} name={worlds.name} id={x2} type={y} />;
							})}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
