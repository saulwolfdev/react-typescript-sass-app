
import * as React from "react";
import {Fragment} from "react";
import { Mocks } from "../../Mocks";
import { IItemsTaskNames } from "../../Entidades/IItemsTaskNames";
import List from "../List/List";
export interface MainProps {
	
}
 
export interface MainState {
	itemsCards:Array<IItemsTaskNames>
}
 
class Main extends React.Component<MainProps, MainState> {
	public constructor(props: MainProps) {
		super(props);
		this.state = {
			itemsCards:[],
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
				<List itemsCards={this.state.itemsCards}/>
			</Fragment>
		);
	}
}
 
export default Main;