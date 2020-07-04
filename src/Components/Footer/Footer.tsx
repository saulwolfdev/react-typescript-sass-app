import * as React from "react";
import { IItemsFooter } from "../../Entidades";
import { Fragment } from "react";
import styles from "./Footer.module.scss";
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
				<ul className={styles.ListNetwork}>
					<li className={styles.ListNetwork_Face}>
						<a className={styles.ListNetwork_Face_Link} href="#">
							<img width="8" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5e30a0e62218ee324d68fe93_5cd5b4dc247e9d5a471b54cc_facebook-hover%201%20(1).svg" alt="facebook" />
						</a>
					</li>
					<li className={styles.ListNetwork_Youtube}>
						<a  className={styles.ListNetwork_Youtube_Link} href="#">
							<img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc738a05fc912ba3f468541_youtube.svg" alt="youtube" /></a></li>
					<li className={styles.ListNetwork_Instagram}>
						<a  className={styles.ListNetwork_Instagram_Link} href="#">
							<img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5cc737f25fc9124cc7468392_insta.svg" alt="instagram" /></a></li>
					<li className={styles.ListNetwork_Twitter}>
						<a  className={styles.ListNetwork_Twitter_Link} href="#">
							<img width="20" src="https://assets.website-files.com/5eab40631f030f96756bbfd5/5eac69c1f22f27f5738bd5a9_Group.svg" alt="twitter" /><span className={styles.ListNetwork_Twitter_Link_Text}>Follow @producktool</span></a></li>
					<li className={styles.ListNetwork_Bons}>
						<a  className={styles.ListNetwork_Bons_Link} href="#">
							<img width="20" src="https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5c8c1be443d1424c209d047b_logo01.png" alt="bons" /><span className={styles.ListNetwork_Twitter_Link_Text}>Brought to you by Bons</span></a></li>
				</ul>

				<ul className={styles.ListLegacy}>
					<li className={styles.ListLegacy_Lists}>Privacy Policy</li>
					<li className={styles.ListLegacy_Lists}>Privacy Policy</li>
					<li className={styles.ListLegacy_Lists}>Terms and Conditions</li>
					<li className={styles.ListLegacy_Contact}>Legal Notice</li>
					<li className={styles.ListLegacy_Contact}>Contact Us</li>
				</ul>
			</Fragment>
		);
	}
}

export default Footer;