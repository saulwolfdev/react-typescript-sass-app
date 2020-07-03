import * as React from "react";
import { Fragment } from "react";
import { IItemListsIcons } from "../../Entidades";

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
				<li>
					<img src={iconUrl} alt={title}/>
					<h4>{title}</h4>
					<p>{description}</p>
				</li>
		</Fragment>);
	}
}
 
export default ItemListIcon;