import React from "react";

//import your own components
import { Footer } from "../component/footer";

//include images into your bundle
import arturito from "../../img/arturito1.jpg";

//create your first component

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/1/?format=json")
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					console.log("Bad response");
				}
			})
			.then(data => {
				this.setState({ character: data });
				console.log(data);
			})
			.catch(error => console.log(error));
	}

	render() {
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
							<h2>Luke Skywalker</h2>
						</div>
						<div className="contentdetail">
							<p>
								Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of
								the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and
								Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended
								the tyranny of the Sith. A generation later, the location of the famed Jedi master was
								one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced
								the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas
								for help. But his solitude would be interrupted – and Luke Skywalker had one final,
								momentous role to play in the struggle between good and evil.
							</p>
						</div>
					</div>
				</div>
				<div className="bottomdetail row">
					<div className="bottomdetail1">
						<p>Gender:</p>
						<p>Male</p>
					</div>
					<div className="bottomdetail1">
						<p>Hair Color:</p>
						<p>Blond</p>
					</div>
					<div className="bottomdetail1">
						<p>Height:</p>
						<p>172</p>
					</div>
					<div className="bottomdetail2">
						<p>Eye Color:</p>
						<p>Blue</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
