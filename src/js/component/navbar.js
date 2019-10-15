import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import starlogo from "../../img/starwarslogo2.png";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		};
	}

	show = () => {
		this.setState({ clicked: !this.state.clicked });
	};

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
								<Link to="/">
									<a className="nav-link">Detail test</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/">
									<a className="nav-link">Series</a>
								</Link>
							</li>
							<li className={" btn-group " + (this.state.clicked && "show")}>
								<button
									onClick={this.show}
									type="button"
									className="drop-button btn btn-secondary dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Favorites
								</button>
								<div className={"dropdown-menu dropdown-menu-right " + (this.state.clicked && "show")}>
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" href="/">
										Something else here
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
