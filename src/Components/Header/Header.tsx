import * as React from "react";
import { IItemHeader } from "../../Entidades";
export interface HeaderProps {
		itemHeader:IItemHeader;
}
 
export interface HeaderState {
	
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
	constructor(props: HeaderProps) {
		super(props);
		this.state = {};
	}
	render() {
		const {logoSvg,pricing,produkt,compare,solutions,help} =this.props.itemHeader;
		return (
			<nav>
				<a href=""><img src={logoSvg} alt=""/></a>
				<ul>
					<li>{pricing}</li>
					<li>{produkt}</li>
					<li>{compare}</li>
					<li>{solutions}</li>
					<li>{help}</li>
				</ul>
				<span>Sign in</span>
				<button>Get Started Free</button>
			</nav>
		);
	}
}
 
export default Header;