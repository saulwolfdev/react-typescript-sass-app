import * as React from "react";
import { IItemHeader } from "../../Entidades";
import styles from "./Header.module.scss";
export interface HeaderProps {
		itemHeader:IItemHeader;
		
}
 
export interface HeaderState {

}
 
class Header extends React.Component<HeaderProps, HeaderState> {

	render() {
		const {logoSvg,pricing,produkt,compare,solutions,help} =this.props.itemHeader;
		return (
			<nav className={styles.Header}>
				<ul  className={styles.Header_List}>
					
						<a className={styles.Header_List_Logo} href="https://www.produck.io/" target="_blank"><img src={logoSvg} alt="logo"/></a>
				
					<li className={styles.Header_List_Princing}>{pricing}</li>
					<li className={styles.Header_List_Produkt}>{produkt}</li>
					<li className={styles.Header_List_Compare}>{compare}</li>
					<li className={styles.Header_List_Solutions}>{solutions}</li>
					<li className={styles.Header_List_Help}>{help}</li>
				</ul>
				< div  className={styles.Header_Login}>
					<span className={styles.Header_Login_In}>Sign in</span>
				<button className={styles.Header_Login_Get}>Get Started Free</button>
				</div>

			</nav>
		);
	}
}
 
export default Header;
