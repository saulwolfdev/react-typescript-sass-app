
import * as React from "react";
import { Fragment } from "react";
import { Mocks } from "../../Mocks";
import { IItemsTaskNames } from "../../Entidades/IItemsTaskNames";
import List from "../List/List";
import styles from "./Main.module.scss";
export interface MainProps {

}

export interface MainState {
	itemsCards: Array<IItemsTaskNames>
}

class Main extends React.Component<MainProps, MainState> {
	public constructor(props: MainProps) {
		super(props);
		this.state = {
			itemsCards: [],
		};
	}

	public componentDidMount() {
		const itemCard = new Mocks();
		let itemsCards = itemCard.GetItemsTaskNames();
		this.setState({
			itemsCards,
		});
	}

	public render() {
		return (
			<Fragment>
				{/* <List itemsCards={this.state.itemsCards}/> */}
				<div className={styles.Container}>
					<div className={styles.Container_Content}>
						<header className={styles.Container_Content_Header}><h1>HEADER</h1></header>
						<section className={styles.Container_Content_Enter}><h1>ENTERPRICE</h1></section>
						<section className={styles.Container_Content_Enter_Image}><h1>ENTERPRICE IMAGE</h1></section>
						<section className={styles.Container_Content_Whole}><h1>WHOLE</h1></section>
						<section className={styles.Container_Content_Whole_Image}><h1>WHOLE IMG</h1></section>
						<section className={styles.Container_Content_Portfolio}><h1>PORT </h1></section>
						<section className={styles.Container_Content_Portfolio_Image}><h1>PORT IMG</h1></section>
						<section className={styles.Container_Content_Granular}><h1>GRANULAR</h1></section>
						<section className={styles.Container_Content_Granular_Image}><h1>GRANULAR IMG</h1></section>
						<section className={styles.Container_Content_Plan}><h1>PLAN</h1></section>
						<section className={styles.Container_Content_Plan_Image}><h1>PLAN IMG</h1></section>
						<section className={styles.Container_Content_Live}><h1>LIVE</h1></section>
						<section className={styles.Container_Content_Get}><h1>GET</h1></section>
						<section className={styles.Container_Content_Card}><h1>CARD</h1></section>
						<footer className={styles.Container_Content_Newsletter}><h1>NEWSLETTER</h1></footer>
					</div>
				</div>

			</Fragment>
		);
	}
}

export default Main;