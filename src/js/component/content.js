import React from "react";

//import your own components
import { Card } from "../component/card";
import { Footer } from "../component/footer";

//include images into your bundle

//create your first component
export class Content extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			planets: []
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
							{characters.map(actor => (
								<Card key={actor.mass + actor.height} name={actor.name} />
							))}
						</div>
					</div>
				</div>
				<div className="tittlegrid2">
					<h3 className="h1grid2">Planets //</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							{planets.map(worlds => (
								<Card key={worlds.orbital_period} name={worlds.name} />
							))}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
