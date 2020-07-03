import * as React from "react";
import {IItemsGetMore} from "../../Entidades";
import GetCardsItems from "../GetCardsItems/GetCardsItems";
export interface GetItemProps {
	itemsGetMoreSection:IItemsGetMore;
}
 
export interface GetItemState {
	
}
 
class GetItem extends React.Component<GetItemProps, GetItemState> {
	constructor(props: GetItemProps) {
		super(props);
		this.state = {};
	}
	render() { 
		const {imgUrl,title,description} = this.props.itemsGetMoreSection;
		return (
			<div>
				<div>
				<img src={imgUrl} alt="img icon"/>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<GetCardsItems getCardItems={this.props.itemsGetMoreSection}/>
			</div>
		);
	}
}
 
export default GetItem;