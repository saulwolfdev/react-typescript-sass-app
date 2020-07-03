
import * as React from "react";
import { Fragment } from "react";
import {IItemsGetMore} from "../../Entidades";
import GetItem from "../GetItem/GetItem";
export interface GetItemsSectionsProps {
	itemsGetMoreSections:Array<IItemsGetMore>
}
 
export interface GetItemsSectionsState {
	
}
 
class GetItemsSections extends React.Component<GetItemsSectionsProps, GetItemsSectionsState> {
	constructor(props: GetItemsSectionsProps) {
		super(props);
		this.state = {

		};
	}
	render() { 
		return (
			<Fragment>
				{this.props.itemsGetMoreSections.map((item,i)=><GetItem key={i} itemsGetMoreSection={item}/>)}
			</Fragment>
		);
	}
}
 
export default GetItemsSections;