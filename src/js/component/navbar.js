import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import starlogo from "../../img/starwarslogo2.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="tittle">
					<Link to="/">
						<a className="navbar-brand">
							<img src={starlogo} width="250" height="125" alt="" />
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
				</div>
				<div className="buttons">
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link to="/">
									<a className="nav-link">Databank</a>
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/demo/">
									<a className="nav-link">Detail test</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/">
									<a className="nav-link">Series</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/">
									<a className="nav-link">Videos</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

<nav className="navbar navbar-light bg-light mb-3">
	<Link to="/single">
		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
	</Link>
	<div className="ml-auto">
		<Link to="/demo">
			<button className="btn btn-primary">Check the Context in action</button>
		</Link>
	</div>
</nav>;
