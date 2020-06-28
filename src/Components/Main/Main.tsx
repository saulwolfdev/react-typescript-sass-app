
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
					<div className={styles.Container_Header}><h1>ITEM</h1></div>
					<div className={styles.Container_Enter}><h1>ENTERPRICE</h1></div>
					<div className={styles.Container_Enter_Image}><h1>IMAGE</h1></div>
					{/* <div><h1>ITEM</h1></div>
					<div><h1>ITEM</h1></div>
					<div><h1>ITEM</h1></div>
					<div><h1>ITEM</h1></div> */}
				</div>

			</Fragment>
		);
	}
}

export default Main;