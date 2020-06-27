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
								<span>{item.saludarMetodo()}</span>
							</div>
						)}
						<div style={{margin:"0 auto",width:"100%"}}>
							<h1 className={styles.Mock}>PRUEBA DE MEDIAS</h1>
						</div>
			</Fragment>
		);
	}
}
 
export default List;