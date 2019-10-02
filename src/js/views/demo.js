import React from "react";
import { Link } from "react-router-dom";

//import { Consumer } from "../store/appContext";

//import your own components
import { Details } from "../component/details";
import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div>
				<Details />
			</div>
		);
	}
}
