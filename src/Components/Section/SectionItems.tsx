import * as React from "react";
import {Fragment} from "react";
import { IItemsTextSection } from "../../Entidades";
import ItemSection from "../ItemSection/ItemSection";
export interface SectionItemsProps {
	itemsSections:Array<IItemsTextSection>;
}
 
export interface SectionItemsState {
	
}
 
class SectionItems extends React.Component<SectionItemsProps, SectionItemsState> {
	constructor(props: SectionItemsProps) {
		super(props);
		this.state = { };
	}

	render() { 
		return (
			<Fragment>
					{this.props.itemsSections.map((item, i)=><ItemSection key={i} itemSection={item}/>)}
			</Fragment>
		);
	}
}
 
export default SectionItems;