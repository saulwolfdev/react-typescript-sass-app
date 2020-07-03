import * as React from "react";
import { IItemsFooter } from "../../Entidades";
import { Fragment } from "react";
export interface FooterProps {
	itemsFooter: Array<IItemsFooter>
}

export interface FooterState {

}

class Footer extends React.Component<FooterProps, FooterState> {
	constructor(props: FooterProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<ul>
					<li><a href="#"><img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5e30a0e62218ee324d68fe93_5cd5b4dc247e9d5a471b54cc_facebook-hover%201%20(1).svg" alt="" /></a></li>
					<li><a href="#"><img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc738a05fc912ba3f468541_youtube.svg" alt="" /></a></li>
					<li><a href="#"><img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc737f25fc9124cc7468392_insta.svg" alt="" /></a></li>
					<li><a href="#"><img width="20" src="https://assets.website-files.com/5eab40631f030f96756bbfd5/5eac69c1f22f27f5738bd5a9_Group.svg" alt="" /><span>Follow @producktool</span></a></li>
					<li><a href="#"><img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5c8c1be443d1424c209d047b_logo01.png" alt="" /><span>Brought to you by Bons</span></a></li>
				</ul>

				<ul>
					<li>Privacy Policy</li>
					<li>Privacy Policy</li>
					<li>Terms and Conditions</li>
					<li>Legal Notice</li>
					<li>Contact Us</li>
				</ul>
			</Fragment>
		);
	}
}

export default Footer;