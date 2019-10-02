import React from "react";

//import your own components
import { Content } from "../component/content";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Content />
			</div>
		);
	}
}
