import * as React from "react";
import { Fragment } from "react";
import {IItemsGetMore} from "../../Entidades"
export interface GetCardsItemsProps {
	getCardItems:IItemsGetMore;
}
 
export interface GetCardsItemsState {
	
}
 
class GetCardsItems extends React.Component<GetCardsItemsProps, GetCardsItemsState> {
	constructor(props: GetCardsItemsProps) {
		super(props);
		this.state = {};
	}
	render() { 
		return (
			<Fragment>
					{this.props.getCardItems.iconsCards?.map((item, i)=>{
						  return <div key={i}>
							<div>
								<img src={item.iconUrl} alt={item.iconName}/>
							</div>
							<h3>{item.iconName}</h3>
							<p>{item.iconDescription}</p>
						</div>
					})}
			</Fragment>
		);
	}
}
 
export default GetCardsItems;