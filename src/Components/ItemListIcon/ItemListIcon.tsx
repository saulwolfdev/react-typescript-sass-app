import * as React from "react";
import { Fragment } from "react";
import { IItemListsIcons } from "../../Entidades";
import styles from "./ItemListIcon.module.scss";

export interface ItemListIconProps {
itemList:IItemListsIcons;
}
 
export interface ItemListIconState {
	
}
 
class ItemListIcon extends React.Component<ItemListIconProps, ItemListIconState> {
	constructor(props: ItemListIconProps) {
		super(props);
		this.state = { };
	}
	render() {
		const {iconUrl,title,description}=this.props.itemList; 
		return (
		<Fragment>
				<li className={styles.ItemListsIcons}>
						<img className={styles.ItemListsIcons_Img} src={iconUrl} alt={title} width="64"/>
						<h4 className={styles.ItemListsIcons_Title}>{title}</h4>
						<p className={styles.ItemListsIcons_Description}>{description}</p>
				</li>
		</Fragment>);
	}
}
 
export default ItemListIcon;