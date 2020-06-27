import * as React from "react";
import {Fragment} from "react";
import { IItemsTaskNames } from "../../Entidades/IItemsTaskNames";
import styles from "./List.module.scss";

export interface ListProps {
		itemsCards:Array<IItemsTaskNames>
}
 
export interface ListState {
	
}
 
class List extends React.Component<ListProps, ListState> {
	constructor(props: ListProps) {
		super(props);
		this.state = {};
	}
	render() { 
		return (
			<Fragment>
						{this.props.itemsCards.map((item, i)=>
							<div className={styles.Container} key={i}>
								<span className={styles.Container_Text}>{item.nameTask}</span>
							</div>
								
						)}
			</Fragment>
		);
	}
}
 
export default List;