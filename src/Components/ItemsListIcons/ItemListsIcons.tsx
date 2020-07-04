import * as React from "react";
import { Fragment } from "react";
import { IItemListsIcons } from "../../Entidades";
import ItemListIcon from "../ItemListIcon/ItemListIcon";
import styles from "./ItemListsIcons.module.scss";
export interface ItemListsIconsProps {
	itemsListIcons:Array<IItemListsIcons>
}
 
export interface ItemListsIconsState {
	
}
 
class ItemListsIcons extends React.Component<ItemListsIconsProps, ItemListsIconsState> {
	constructor(props: ItemListsIconsProps) {
		super(props);
		this.state = {};
	}
	render() { 
		return (
			<Fragment>
				<ul className={styles.ItemListsIcons}>
					{this.props.itemsListIcons.map((item,i)=><ItemListIcon key={i} itemList={item}/>)}
				</ul>
			</Fragment>
		);
	}
}
 
export default ItemListsIcons;